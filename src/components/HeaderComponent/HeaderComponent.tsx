import * as React from 'react';

import { transitionDirection } from '../../containers/PageTransitionContainer';
import { Icon } from '../../patterns/Icon/Icon';
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
      <div className={styles.right}>
        <div className={styles.social}>
          <a className={styles.socialButton} target="_blank" href="https://www.instagram.com/karstenbuckstegge/">
            <Icon className={styles.socialIcon} icon="instagram" />
          </a>
          <a className={styles.socialButton} target="_blank" href="https://www.behance.net/karstenbuckstegge/">
            <Icon className={styles.socialIcon} icon="behance" />
          </a>
          <a className={styles.socialButton} target="_blank" href="https://www.github.com/karstenbuckstegge/">
            <Icon className={styles.socialIcon} icon="github" />
          </a>
          <a className={styles.socialButton} target="_blank" href="https://www.linkedin.com/in/karstenbuckstegge/">
            <Icon className={styles.socialIcon} icon="linkedin" />
          </a>
          <a className={styles.socialButton} target="_blank" href="https://www.xing.com/profile/Karsten_Buckstegge/">
            <Icon className={styles.socialIcon} icon="xing" />
          </a>
        </div>
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
      </div>
    ) : (
      <MenuComponent headerOffScreen={props.headerOffScreen} />
    )}
  </header>
);
