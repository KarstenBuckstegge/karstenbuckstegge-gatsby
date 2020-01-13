import * as React from 'react';

import { transitionDirection } from '../../containers/PageTransitionContainer';
import { LinkButton } from '../../patterns/LinkButton/LinkButton';
import { LogoComponent } from '../LogoComponent/LogoComponent';
import { MenuComponent } from '../MenuComponent/MenuComponent';

import styles from './headerComponent.module.scss';

interface Props {
  headerOffScreen: boolean;
  secondaryPage?: boolean;
  pageTransitionDirection?: transitionDirection;
}

export const HeaderComponent: React.StatelessComponent<Props> = props => (
  <header className={styles.header}>
    <LogoComponent link="/" className={styles.logo} />
    {props.secondaryPage ? (
      <LinkButton
        internal={true}
        href="/"
        className={styles.backButton}
        color="green"
        size="small"
        direction={props.pageTransitionDirection}
      >
        Back to MainPage
      </LinkButton>
    ) : (
      <MenuComponent headerOffScreen={props.headerOffScreen} />
    )}
  </header>
);
