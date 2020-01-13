import * as React from 'react';

import Masonry from 'react-masonry-component';
import ReactResizeDetector from 'react-resize-detector';

import { AboutComponent } from '../../components/AboutComponent/AboutComponent';
import { PortfolioFiltersComponent } from '../../components/PortfolioFiltersComponent/PortfolioFiltersComponent';
import { ProjectComponent } from '../../components/ProjectComponent/ProjectComponent';
import { Project, ProjectTypes } from '../../pages/portfolio';
import { MOBILE_BREAKPOINT } from '../IndexContainer';

import styles from './portfolioItemsContainer.module.scss';

interface Props {
  items: Project[];
  onImagesLoaded: () => void;
}

export interface Filters {
  illustration: boolean;
  development: boolean;
  mural: boolean;
  experimental: boolean;
  design: boolean;
}

interface State {
  activeFilters: Filters;
  isSmallScreen: boolean;
}

const hasFilteredType = (types: ProjectTypes[], filters: Filters) => {
  const filteredTypes = types.filter(type => {
    return filters[type];
  });

  return filteredTypes.length > 0;
};

const orderItems = (items: Project[]) => {
  return items.sort((itemA, itemB) => {
    return new Date(itemA.node.createdAt).valueOf() - new Date(itemB.node.createdAt).valueOf();
  });
};

export class PortfolioItems extends React.Component<Props, State> {
  public state: State = {
    activeFilters: {
      design: false,
      development: false,
      experimental: false,
      illustration: false,
      mural: false
    },
    isSmallScreen: false
  };

  constructor(props: Props) {
    super(props);

    this.onFilterClick = this.onFilterClick.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  public render() {
    return (
      <div className={styles.container}>
        <ReactResizeDetector handleWidth={true} onResize={this.onResize} />
        <PortfolioFiltersComponent className={styles.filter} onFilterClick={this.onFilterClick} activeFilters={this.state.activeFilters} />
        <AboutComponent className={styles.about} condensed={true} />
        <Masonry
          onImagesLoaded={this.props.onImagesLoaded}
          className={styles.grid}
          elementType="ul"
          options={{
            fitWidth: true,
            gutter: this.state.isSmallScreen ? 0 : 45
          }}
        >
          {this.sortItems().map(item => (
            <ProjectComponent project={item} key={item.node.title} />
          ))}
        </Masonry>
      </div>
    );
  }

  private sortItems() {
    const filteredItems = this.filterItems();

    return orderItems(filteredItems);
  }

  private filterItems() {
    if (this.allFiltersOff()) {
      return this.props.items;
    }

    return this.props.items.filter(item => {
      return hasFilteredType(item.node.type, this.state.activeFilters);
    });
  }

  private allFiltersOff() {
    for (const item in this.state.activeFilters) {
      if (this.state.activeFilters[item]) {
        return false;
        break;
      }
    }
    return true;
  }

  private onFilterClick(event: React.SyntheticEvent<HTMLButtonElement>) {
    const filterName = event.currentTarget.dataset.name;

    const tempActiveFilters = this.state.activeFilters;
    tempActiveFilters[filterName!] = !this.state.activeFilters[filterName!];

    this.setState({
      activeFilters: tempActiveFilters
    });
  }

  private onResize() {
    const isCurrentlySmallScreen = window.innerWidth < MOBILE_BREAKPOINT;

    if (this.state.isSmallScreen !== isCurrentlySmallScreen) {
      this.setState({
        isSmallScreen: isCurrentlySmallScreen
      });
    }
  }
}
