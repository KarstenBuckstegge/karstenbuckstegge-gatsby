import * as React from 'react';

import { LogoComponent } from '../LogoComponent/LogoComponent';
import { MenuComponent } from '../MenuComponent/MenuComponent';

import styles from './headerComponent.module.scss';

export const HeaderComponent: React.StatelessComponent<{}> = () => (
  <header className={styles.header}>
    <LogoComponent link="#" className={styles.logo} />
    <MenuComponent />
  </header>
);
