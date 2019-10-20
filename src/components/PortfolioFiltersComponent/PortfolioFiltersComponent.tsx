import * as React from 'react';

import classnames from 'classnames';

import { FILTERS, Filters } from '../../containers/PortfolioItemsContainer/PortfolioItemsContainer';

import HR from '../../../svg/hr.svg';

import styles from './portfolioFiltersComponent.module.scss';

interface Props {
  onFilterClick: (event: React.SyntheticEvent) => void;
  activeFilters: Filters;
}

export const PortfolioFiltersComponent: React.StatelessComponent<Props> = props => (
  <div className={styles.filters}>
    {FILTERS.map(filter => (
      <button
        type="button"
        className={classnames(styles.filterContainer, styles[filter], { [styles.active]: props.activeFilters[filter] })}
        key={filter}
        onClick={props.onFilterClick}
        data-name={filter}
      >
        {filter}

        <HR className={styles.underline} />
      </button>
    ))}
  </div>
);
