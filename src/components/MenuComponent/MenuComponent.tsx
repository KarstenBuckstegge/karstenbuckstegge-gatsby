import * as React from 'react';

import classnames from 'classnames';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import { PageTransition } from '../../containers/PageTransitionContainer';
import { Icon } from '../../patterns/Icon/Icon';

import Bubble_1 from '../../../svg/bubble_1.svg';
import Bubble_2 from '../../../svg/bubble_2.svg';
import Bubble_3 from '../../../svg/bubble_3.svg';

import styles from './menuComponent.module.scss';

interface Props {
  headerOffScreen: boolean;
}

export const MenuComponent: React.FC<Props> = props => (
  <div className={classnames({ [styles.offset]: props.headerOffScreen })}>
    <ul className={styles.links}>
      <PageTransition title="Portfolio" to="/portfolio/" direction="right" className={classnames(styles.link, styles.portfolio)}>
        <li className={styles.text}>portfolio</li>
      </PageTransition>
      <AnchorLink title="Über mich" href="#aboutSection" className={classnames(styles.link, styles.about)}>
        <li className={styles.text}>about me</li>
      </AnchorLink>
      <AnchorLink title="Kontakt" href="#contactSection" className={classnames(styles.link, styles.contact)}>
        <li className={styles.text}>contact</li>
      </AnchorLink>
    </ul>

    <div className={styles.bubbles}>
      <PageTransition title="Portfolio" to="/portfolio/" direction="right" className={classnames(styles.bubble, styles.portfolio)}>
        <Bubble_1 className={styles.bubbleBackground} />
        <Bubble_1 className={styles.bubbleBackgroundPulse} />
        <Icon className={styles.icon} icon="portfolio" />
      </PageTransition>
      <AnchorLink title="Über mich" href="#aboutSection" className={classnames(styles.bubble, styles.about)}>
        <Bubble_2 className={styles.bubbleBackground} />
        <Bubble_2 className={styles.bubbleBackgroundPulse} />
        <Icon className={styles.icon} icon="home" />
      </AnchorLink>
      <AnchorLink title="Kontakt" href="#contactSection" className={classnames(styles.bubble, styles.contact)}>
        <Bubble_3 className={styles.bubbleBackground} />
        <Bubble_3 className={styles.bubbleBackgroundPulse} />
        <Icon className={styles.icon} icon="mail" />
      </AnchorLink>
    </div>
  </div>
);
