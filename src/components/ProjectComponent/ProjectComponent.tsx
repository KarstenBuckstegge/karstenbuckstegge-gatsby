import * as React from 'react';

import classnames from 'classnames';

import { Project } from 'src/pages/portfolio';
import { Icon } from '../../patterns/Icon/Icon';

import Bubble from '../../../svg/bubble_1.svg';
import View from '../../../svg/icons/view.svg';

import styles from './projectComponent.module.scss';

interface Props {
  project: Project;
}

export const ProjectComponent = (props: Props) => {
  const { image, info, title, links, type } = props.project.node;

  const typeStyles = () => {
    return type.map(projectType => {
      return styles[projectType];
    });
  };

  const getLinkIcon = (link: string) => {
    if (link === 'instagram' || link === 'behance' || link === 'xing' || link === 'behance' || link === 'web') {
      // @ts-ignore
      return (
        <Icon className={styles.linkIcon} icon={link}>
          {link}
        </Icon>
      );
    } else {
      return (
        <Icon className={styles.linkIcon} icon="link">
          {link}
        </Icon>
      );
    }
  };

  return (
    <li className={classnames(styles.project, typeStyles())} tabIndex={1}>
      <a className={styles.imageWrapper} href={links.behance} target="_blank">
        <View className={styles.viewIcon} />
        <img className={styles.image} src={`https:${image.file.url}`} alt={image.title} />
      </a>
      <div className={styles.description}>
        <div className={styles.indicators}>
          {type.map(projectType => (
            <Bubble className={classnames(styles.indicator, styles[`indicator${projectType}`])} key={projectType} title={projectType} />
          ))}
        </div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.info}>{info}</div>

        <div className={styles.links}>
          {Object.keys(links).map(link => {
            if (!links[link]) {
              return;
            }

            return (
              <a className={styles.link} key={link} href={links[link]} target="_blank">
                {getLinkIcon(link)}
              </a>
            );
          })}
        </div>
      </div>
    </li>
  );
};
