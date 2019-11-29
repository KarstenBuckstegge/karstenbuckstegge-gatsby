import * as React from 'react';

import classnames from 'classnames';
import { Link } from 'gatsby';

import { Icon } from '../../patterns/Icon/Icon';

import styles from './menuComponent.module.scss';

interface Props {
  headerOffScreen: boolean;
}

export const MenuComponent: React.FC<Props> = props => (
  <div className={classnames({ [styles.offset]: props.headerOffScreen })}>
    <ul className={styles.links}>
      <Link to="/portfolio/" className={classnames(styles.link, styles.portfolio)}>
        <li className={styles.text}>portfolio</li>
      </Link>
      <a href="/#aboutSection" className={classnames(styles.link, styles.about)}>
        <li className={styles.text}>about me</li>
      </a>
      <a href="/#contactSection" className={classnames(styles.link, styles.contact)}>
        <li className={styles.text}>contact</li>
      </a>
    </ul>

    <div className={styles.bubbles}>
      <Link to="/portfolio/" className={classnames(styles.bubble, styles.portfolio)}>
        <Icon className={styles.icon} icon="portfolio" />
      </Link>
      <a href="/#aboutSection" className={classnames(styles.bubble, styles.about)}>
        <Icon className={styles.icon} icon="home" />
      </a>
      <a href="/#contactSection" className={classnames(styles.bubble, styles.contact)}>
        <Icon className={styles.icon} icon="mail" />
      </a>
    </div>
  </div>
);
