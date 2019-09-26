import * as React from 'react';

import { HeaderComponent } from '../HeaderComponent/HeaderComponent';

import styles from './layoutComponent.module.scss';

interface Props {
  children: React.ReactNode;
}

export const LayoutComponent: React.StatelessComponent<Props> = ({ children }) => (
  <main className={styles.main}>
    <div className={styles.grain} />
    <HeaderComponent />
    {children}
  </main>
);
