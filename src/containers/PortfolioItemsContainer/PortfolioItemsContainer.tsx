import * as React from 'react';

import Masonry from 'react-masonry-component';

import PortfolioContainer, { Project, ProjectTypes } from 'src/pages/portfolio';
import { PortfolioFiltersComponent } from '../../components/PortfolioFiltersComponent/PortfolioFiltersComponent';
import { PortfolioItemComponent } from '../../components/PortfolioItemComponent/PortfolioItemComponent';

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
}

export const FILTERS = ['illustration', 'development', 'mural', 'experimental', 'design'];

const hasFilteredType = (types: ProjectTypes[], filters: Filters) => {
  const filteredTypes = types.filter(type => {
    return filters[type];
  });

  return filteredTypes.length > 0;
};

export class PortfolioItems extends React.Component<Props, State> {
  public state: State = {
    activeFilters: {
      design: false,
      development: false,
      experimental: false,
      illustration: false,
      mural: false
    }
  };

  constructor(props: Props) {
    super(props);

    this.onFilterClick = this.onFilterClick.bind(this);
  }

  public render() {
    return (
      <>
        <PortfolioFiltersComponent onFilterClick={this.onFilterClick} activeFilters={this.state.activeFilters} />
        <Masonry
          onImagesLoaded={this.props.onImagesLoaded}
          className={styles.grid}
          elementType="ul"
          options={{
            columnWidth: 30,
            fitWidth: true,
            gutter: 10
          }}
        >
          {this.renderItems()}
        </Masonry>
      </>
    );
  }

  private renderItems() {
    return this.filterItems();
  }

  private filterItems() {
    return this.props.items.map(item => {
      if (this.allFiltersOff()) {
        return <PortfolioItemComponent item={item} key={item.node.title} />;
      }

      if (hasFilteredType(item.node.type, this.state.activeFilters)) {
        return <PortfolioItemComponent item={item} key={item.node.title} />;
      }
      return;
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
    const filterName = event.currentTarget.innerHTML;

    const tempActiveFilters = this.state.activeFilters;
    tempActiveFilters[filterName] = !this.state.activeFilters[filterName];

    this.setState({
      activeFilters: tempActiveFilters
    });
  }
}
