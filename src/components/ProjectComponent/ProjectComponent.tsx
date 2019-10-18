import * as React from 'react';

import { Project } from 'src/pages/portfolio';

import styles from './projectComponent.module.scss';

interface Props {
  project: Project;
}

export const ProjectComponent = (props: Props) => {
  const { image, info, title, links, type } = props.project.node;

  // tslint:disable-next-line:no-console
  console.log('TYPE:', type);

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={`https:${image.file.url}`} alt="title" />
      <h2 className={styles.title}>{title}</h2>
      <div>INFO: {info}</div>

      {Object.keys(links).map(link => {
        if (!links[link]) {
          return;
        }

        return (
          <a key={link} href={links[link]} target="_blank">
            {link}
          </a>
        );
      })}
    </div>
  );
};
