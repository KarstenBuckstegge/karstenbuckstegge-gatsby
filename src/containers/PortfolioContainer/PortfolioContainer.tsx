import * as React from 'react';

import { Project } from 'src/pages/portfolio';
import { LayoutComponent } from '../../components/LayoutComponent/LayoutComponent';
import { PortfolioItems } from '../PortfolioItemsContainer/PortfolioItemsContainer';

interface Props {
  projects: Project[];
}

interface State {
  loading: boolean;
}

export class Portfolio extends React.Component<Props, State> {
  public state: State = {
    loading: true
  };

  constructor(props: Props) {
    super(props);

    this.onImagesLoaded = this.onImagesLoaded.bind(this);
  }

  public render() {
    return (
      <LayoutComponent secondaryPage={true} loading={this.state.loading}>
        <PortfolioItems items={this.props.projects} onImagesLoaded={this.onImagesLoaded} />
      </LayoutComponent>
    );
  }

  private onImagesLoaded() {
    if (this.state.loading) {
      this.setState({
        loading: false
      });
    }
  }
}
