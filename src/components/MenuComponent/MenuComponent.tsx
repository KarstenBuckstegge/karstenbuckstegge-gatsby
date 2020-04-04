import * as React from 'react';

import classnames from 'classnames';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import { PageTransition } from '../../containers/PageTransitionContainer';
import { Icon } from '../../patterns/Icon/Icon';
import { LinkButton } from '../../patterns/LinkButton/LinkButton';

import Bubble_1 from '../../../svg/bubble_1.svg';
import Bubble_2 from '../../../svg/bubble_2.svg';
import Bubble_3 from '../../../svg/bubble_3.svg';

import styles from './menuComponent.module.scss';

interface Props {
  headerOffScreen: boolean;
}

export const MenuComponent: React.FC<Props> = props => (
  <div className={classnames({ [styles.offset]: props.headerOffScreen })}>
    <div className={styles.links}>
      <LinkButton className={styles.link} internal={true} href="/portfolio/" color="green" size="small" direction="right">
        portfolio
      </LinkButton>
      <LinkButton className={styles.link} anchor={true} href="#aboutSection" color="pink" size="small">
        about me
      </LinkButton>
      <LinkButton className={styles.link} anchor={true} href="#contactSection" color="grey" size="small">
        contact
      </LinkButton>
    </div>

    <div className={styles.bubbles}>
      <PageTransition title="Portfolio" to="/portfolio/" direction="right" className={classnames(styles.bubble, styles.portfolio)}>
        <Bubble_1 className={styles.bubbleBackground} />
        <Bubble_1 className={styles.bubbleBackgroundPulse} />
        <Icon className={styles.icon} icon="portfolio" />
      </PageTransition>
      <AnchorLink title="about me" href="#aboutSection" className={classnames(styles.bubble, styles.about)}>
        <Bubble_2 className={styles.bubbleBackground} />
        <Bubble_2 className={styles.bubbleBackgroundPulse} />
        <Icon className={styles.icon} icon="home" />
      </AnchorLink>
      <AnchorLink title="contact" href="#contactSection" className={classnames(styles.bubble, styles.contact)}>
        <Bubble_3 className={styles.bubbleBackground} />
        <Bubble_3 className={styles.bubbleBackgroundPulse} />
        <Icon className={styles.icon} icon="mail" />
      </AnchorLink>
    </div>
  </div>
);
