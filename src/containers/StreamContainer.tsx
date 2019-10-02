import * as React from 'react';

import ReactResizeDetector from 'react-resize-detector';

import { StreamComponent } from '../components/StreamComponent/streamComponent';

interface State {
  scrollPosition: number;
  viewportWidth: number;
  viewportHeight: number;
}

let scrolling = false;

const STREAM_RATIO = 2.28030303030303;
const STREAM_WIDTH_VW = 0.95;
const STREAM_MARGIN_TOP = 88;

export class Stream extends React.Component<{}, State> {
  public state: State = {
    scrollPosition: 0,
    viewportHeight: 0,
    viewportWidth: 0
  };

  constructor(props: {}) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  public componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  public render() {
    const streamWidth = this.state.viewportWidth * STREAM_WIDTH_VW;
    const streamHeight = streamWidth * STREAM_RATIO;
    const streamStartBottom = this.state.viewportHeight - STREAM_MARGIN_TOP; // what pixel of the svg hits the viewport bottom edge
    const hiddenStreamHeight = streamHeight - streamStartBottom; // how much of the svg is hidden

    const streamRelativeScrollPosition = this.state.scrollPosition / hiddenStreamHeight;

    return (
      <>
        <ReactResizeDetector handleWidth={true} handleHeight={true} onResize={this.onResize} />
        <StreamComponent scrollPosition={streamRelativeScrollPosition} />
      </>
    );
  }

  private onResize() {
    this.setState({
      viewportHeight: window.innerHeight,
      viewportWidth: window.innerWidth
    });
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
}
