import * as React from 'react';

import { HeaderComponent } from '../components/HeaderComponent/HeaderComponent';
import { transitionDirection } from './PageTransitionContainer';

interface Props {
  secondaryPage?: boolean;
  pageTransitionDirection?: transitionDirection;
}

interface State {
  scrollPosition: number;
}

let scrolling = false;

export class Header extends React.Component<Props, State> {
  public state: State = {
    scrollPosition: 0
  };

  constructor(props: Props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }

  public componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  public render() {
    return (
      <HeaderComponent
        headerOffScreen={this.state.scrollPosition > 10}
        secondaryPage={this.props.secondaryPage}
        pageTransitionDirection={this.props.pageTransitionDirection}
      />
    );
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
