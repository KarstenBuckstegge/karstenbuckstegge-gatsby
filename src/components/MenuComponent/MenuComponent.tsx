import { Link } from 'gatsby';
import * as React from 'react';

import classnames from 'classnames';

import styles from './menuComponent.module.scss';

export const MenuComponent: React.StatelessComponent = () => (
  <ul className={styles.menu}>
    <Link to="portfolio" className={styles.link}>
      <li className={classnames(styles.item, styles.portfolio)}>portfolio</li>
    </Link>
    <a href="/#aboutSection" className={styles.link}>
      <li className={classnames(styles.item, styles.about)}>about me</li>
    </a>
    <a href="/#contactSection" className={styles.link}>
      <li className={classnames(styles.item, styles.contact)}>contact</li>
    </a>
  </ul>
);
