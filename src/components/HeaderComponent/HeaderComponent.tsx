import * as React from 'react';

import { transitionDirection } from '../../containers/PageTransitionContainer';
import { Icon } from '../../patterns/Icon/Icon';
import { LinkButton } from '../../patterns/LinkButton/LinkButton';
import { LogoComponent } from '../LogoComponent/LogoComponent';
import { MenuComponent } from '../MenuComponent/MenuComponent';
import { SocialButtonsComponent } from '../SocialButtonsComponent/SocialButtonsComponent';

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
      <div className={styles.right}>
        <SocialButtonsComponent />
        <LinkButton
          className={styles.homeButton}
          internal={true}
          href="/"
          color="green"
          size="small"
          direction={props.pageTransitionDirection}
        >
          <div className={styles.homeContent}>
            Home
            <Icon className={styles.homeIcon} icon="arrow" />
          </div>
        </LinkButton>
      </div>
    ) : (
      <MenuComponent headerOffScreen={props.headerOffScreen} />
    )}
  </header>
);
