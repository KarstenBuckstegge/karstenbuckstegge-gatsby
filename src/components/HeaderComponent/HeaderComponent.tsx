import * as React from 'react';

import { LinkButton } from '../../patterns/LinkButton/LinkButton';
import { LogoComponent } from '../LogoComponent/LogoComponent';
import { MenuComponent } from '../MenuComponent/MenuComponent';

import styles from './headerComponent.module.scss';

interface Props {
  headerOffScreen: boolean;
  secondaryPage?: boolean;
}

export const HeaderComponent: React.StatelessComponent<Props> = props => (
  <header className={styles.header}>
    <LogoComponent link="/" className={styles.logo} />
    {props.secondaryPage ? (
      <LinkButton internal={true} href="/" className={styles.link} color="green" size="small">
        Back to MainPage
      </LinkButton>
    ) : (
      <MenuComponent headerOffScreen={props.headerOffScreen} />
    )}
  </header>
);
