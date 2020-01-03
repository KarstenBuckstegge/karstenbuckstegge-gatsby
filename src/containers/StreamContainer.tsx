import * as React from 'react';

import { Viewport } from '../components/IndexComponent/IndexComponent';
import { allImages, StreamComponent } from '../components/StreamComponent/StreamComponent';

interface Props {
  onLoad: () => void;
  viewport: Viewport;
}

interface State {
  imagesLoaded: number;
  scrollPosition: number;
}

let scrolling = false;

const STREAM_RATIO = 2.28030303030303;
const STREAM_WIDTH_VW = 0.95;
const STREAM_MARGIN_TOP = 88;

const SVG_IMAGE_COUNT = allImages.length;

export class Stream extends React.Component<Props, State> {
  public state: State = {
    imagesLoaded: 0,
    scrollPosition: 0
  };

  constructor(props: Props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
  }

  public componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  public componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.imagesLoaded !== prevState.imagesLoaded && this.state.imagesLoaded === SVG_IMAGE_COUNT) {
      this.props.onLoad();
    }
  }

  public render() {
    const streamWidth = this.props.viewport.width * STREAM_WIDTH_VW;
    const streamHeight = streamWidth * STREAM_RATIO;
    const streamStartBottom = this.props.viewport.height - STREAM_MARGIN_TOP; // what pixel of the svg hits the viewport bottom edge
    const hiddenStreamHeight = streamHeight - streamStartBottom; // how much of the svg is hidden

    const streamRelativeScrollPosition = this.state.scrollPosition / hiddenStreamHeight;

    return <StreamComponent scrollPosition={streamRelativeScrollPosition} imageLoaded={this.imageLoaded} />;
  }

  private onScroll() {
    if (!scrolling) {
      requestAnimationFrame(() => {
        const offset = window.pageYOffset;

        this.setState({
          scrollPosition: offset
        });

        scrolling = false;
      });

      scrolling = true;
    }
  }

  private imageLoaded() {
    this.setState({
      imagesLoaded: this.state.imagesLoaded + 1
    });
  }
}
