import * as React from 'react';

import { Project } from 'src/pages/portfolio';
import { ProjectComponent } from '../ProjectComponent/ProjectComponent';

import styles from './portfolioItemComponent.module.scss';

interface Props {
  item: Project;
}

export const PortfolioItemComponent: React.StatelessComponent<Props> = props => (
  <li className={styles.gridItem}>
    <ProjectComponent project={props.item} />
  </li>
);
