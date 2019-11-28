import * as React from 'react';

import { Link } from 'gatsby';

import styles from './footerComponent.module.scss';

export const FooterComponent: React.FC = () => (
  <footer className={styles.footer}>
    <span>&copy; Karsten Buckstegge 2019</span>
    <span className={styles.links}>
      <Link className={styles.link} to="privacy">
        Datenschutz
      </Link>
      <Link className={styles.link} to="impressum">
        Impressum
      </Link>
    </span>
  </footer>
);
