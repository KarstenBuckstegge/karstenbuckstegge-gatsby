import * as React from 'react';

import classnames from 'classnames';

import { Filters } from '../../containers/PortfolioItemsContainer/PortfolioItemsContainer';
import { Icon } from '../../patterns/Icon/Icon';

import HR from '../../../svg/hr.svg';

import styles from './portfolioFiltersComponent.module.scss';

type FilterTypes = 'illustration' | 'development' | 'mural' | 'experimental' | 'design';

interface Props {
  onFilterClick: (event: React.SyntheticEvent) => void;
  activeFilters: Filters;
}

export const FILTERS: FilterTypes[] = ['illustration', 'development', 'mural', 'experimental', 'design'];

export const PortfolioFiltersComponent: React.StatelessComponent<Props> = props => (
  <div className={styles.filters}>
    {FILTERS.map(filter => (
      <button
        type="button"
        className={classnames(styles.filter, styles[filter], { [styles.active]: props.activeFilters[filter] })}
        onClick={props.onFilterClick}
        key={filter}
        data-name={filter}
      >
        <Icon className={styles.filterIcon} icon={filter} />
        {filter}

        <HR className={styles.underline} />
      </button>
    ))}
  </div>
);
