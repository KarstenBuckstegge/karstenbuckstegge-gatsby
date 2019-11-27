import * as React from 'react';

import classnames from 'classnames';
import { Link } from 'gatsby';

import { Icon } from '../../patterns/Icon/Icon';

import styles from './menuComponent.module.scss';

export const MenuComponent: React.FC = () => (
  <ul className={styles.menu}>
    <div className={classnames(styles.item, styles.portfolio)}>
      <Icon className={styles.icon} icon="portfolio" />
      <Link to="portfolio" className={styles.link}>
        <li>portfolio</li>
      </Link>
    </div>
    <div className={classnames(styles.item, styles.about)}>
      <Icon className={styles.icon} icon="home" />
      <a href="/#aboutSection" className={styles.link}>
        <li>about me</li>
      </a>
    </div>
    <div className={classnames(styles.item, styles.contact)}>
      <Icon className={styles.icon} icon="mail" />
      <a href="/#contactSection" className={styles.link}>
        <li>contact</li>
      </a>
    </div>
  </ul>
);
