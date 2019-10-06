import * as React from 'react';

import { HeaderComponent } from '../HeaderComponent/HeaderComponent';

import styles from './layoutComponent.module.scss';

interface Props {
  children: React.ReactNode;
}

export const LayoutComponent: React.StatelessComponent<Props> = ({ children }) => {
  require('smooth-scroll')('a[href*="#"]', {
    speed: 600
  });

  return (
    <main className={styles.main}>
      <div className={styles.grain} />
      <HeaderComponent />
      {children}
    </main>
  );
};
