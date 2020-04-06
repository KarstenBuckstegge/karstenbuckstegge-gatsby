import * as React from 'react';

import { PageTransition } from '../../containers/PageTransitionContainer';

import styles from './footerComponent.module.scss';

export const FooterComponent: React.FC = () => (
  <footer className={styles.footer}>
    <span>&copy; Karsten Buckstegge 2020</span>
    <span className={styles.links}>
      {/* <PageTransition className={styles.link} to="/privacy/">
        Datenschutz
      </PageTransition> */}
      <PageTransition className={styles.link} to="/impressum/">
        Impressum
      </PageTransition>
    </span>
  </footer>
);
