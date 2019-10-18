import * as React from 'react';

import classnames from 'classnames';

import { FILTERS, Filters } from '../../containers/PortfolioItemsContainer/PortfolioItemsContainer';

import styles from './portfolioFiltersComponent.module.scss';

interface Props {
  onFilterClick: (event: React.SyntheticEvent) => void;
  activeFilters: Filters;
}

export const PortfolioFiltersComponent: React.StatelessComponent<Props> = props => (
  <>
    {FILTERS.map(filter => (
      <button
        className={classnames(styles.filter, { [styles.active]: props.activeFilters[filter] })}
        type="button"
        key={filter}
        onClick={props.onFilterClick}
      >
        {filter}
      </button>
    ))}
    ;
  </>
);
