import * as React from 'react';

import { Project } from 'src/pages/portfolio';
import { ProjectComponent } from './ProjectComponent';

interface Props {
  projects: Project[];
}

export const PortfolioComponent = (props: Props) => {
  return (
    <ul>
      {props.projects.map(project => {
        return <ProjectComponent project={project} key={project.node.title} />;
      })}
    </ul>
  );
};
