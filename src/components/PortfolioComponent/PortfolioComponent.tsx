import * as React from 'react';

import Masonry from 'react-masonry-component';

import { Project } from 'src/pages/portfolio';
import { LayoutComponent } from '../LayoutComponent/LayoutComponent';
import { ProjectComponent } from '../ProjectComponent/ProjectComponent';

import styles from './portfolioComponent.module.scss';

interface Props {
  projects: Project[];
}

interface State {
  loading: boolean;
}

export class PortfolioComponent extends React.Component<Props, State> {
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
        <Masonry
          onImagesLoaded={this.onImagesLoaded}
          className={styles.grid}
          elementType="ul"
          options={{
            columnWidth: 30,
            fitWidth: true,
            gutter: 10
          }}
        >
          {this.props.projects.map(project => (
            <li className={styles.gridItem} key={project.node.title}>
              <ProjectComponent project={project} />
            </li>
          ))}
        </Masonry>
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
