import * as React from 'react';

import classnames from 'classnames';
import Img from 'gatsby-image';

import { Project } from '../../pages/portfolio';
import { Icon } from '../../patterns/Icon/Icon';
import { LinkButton } from '../../patterns/LinkButton/LinkButton';

import Bubble from '../../../svg/bubble_1.svg';
import View from '../../../svg/icons/view.svg';

import styles from './projectComponent.module.scss';

type Link = 'behance' | 'instagram' | 'web' | 'github';

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
    if (link === 'instagram' || link === 'behance' || link === 'xing' || link === 'behance' || link === 'web' || link === 'github') {
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
    <li className={classnames(styles.project, typeStyles())}>
      <a className={styles.imageWrapper} href={links.behance} target="_blank" rel="noopener" tabIndex={1}>
        <View className={styles.viewIcon} />
        <Img className={styles.image} key={image.fluid.src} alt={image.title} fluid={image.fluid} />
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
          {Object.keys(links).map((link: Link) => {
            if (!links[link]) {
              return;
            }

            return (
              <LinkButton tabIndex={1} className={styles.link} key={link} href={links[link]} color={link} target="_blank">
                {getLinkIcon(link)}
              </LinkButton>
            );
          })}
        </div>
      </div>
    </li>
  );
};
