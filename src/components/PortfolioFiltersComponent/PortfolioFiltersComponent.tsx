import * as React from 'react';

import classnames from 'classnames';

import { Filters } from '../../containers/PortfolioItemsContainer/PortfolioItemsContainer';
import { Icon } from '../../patterns/Icon/Icon';

import styles from './portfolioFiltersComponent.module.scss';

import { Button } from '../../patterns/Button/Button';

type FilterTypes = 'illustration' | 'development' | 'mural' | 'experimental' | 'design';

interface Props {
  onFilterClick: (event: React.SyntheticEvent) => void;
  activeFilters: Filters;
}

export const FILTERS: FilterTypes[] = ['illustration', 'development', 'mural', 'experimental', 'design'];

const setColor = (filter: FilterTypes) => {
  if (filter === 'development') {
    return 'blue';
  } else if (filter === 'experimental') {
    return 'pink';
  }
  return 'green';
};

export const PortfolioFiltersComponent: React.StatelessComponent<Props> = props => (
  <div className={styles.filters}>
    {FILTERS.map(filter => (
      <Button
        color={setColor(filter)}
        className={classnames(styles.filter, filter && styles[filter], { [styles.active]: props.activeFilters[filter] })}
        onClick={props.onFilterClick}
        active={props.activeFilters[filter]}
        key={filter}
        data-name={filter}
      >
        <Icon className={styles.filterIcon} icon={filter} />
        {filter}
      </Button>
    ))}
  </div>
);
