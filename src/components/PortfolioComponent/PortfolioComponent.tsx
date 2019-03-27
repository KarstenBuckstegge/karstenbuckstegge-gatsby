import * as React from 'react';

import { Project } from 'src/pages/portfolio';
import { ProjectComponent } from '../ProjectComponent/ProjectComponent';

import styles from './portfolioComponent.module.scss';

interface Props {
  projects: Project[];
}

export const PortfolioComponent = (props: Props) => (
  <ul>
    {props.projects.map(project => (
      <div className={styles.wrapper} key={project.node.title}>
        <ProjectComponent project={project} />;
      </div>
    ))}
  </ul>
);
