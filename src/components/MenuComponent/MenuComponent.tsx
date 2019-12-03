import * as React from 'react';

import classnames from 'classnames';
import { Link } from 'gatsby';

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
      <Link to="/portfolio/" className={classnames(styles.link, styles.portfolio)}>
        <li className={styles.text}>portfolio</li>
      </Link>
      <a href="/#aboutSection" className={classnames(styles.link, styles.about)}>
        <li className={styles.text}>about me</li>
      </a>
      <a href="/#contactSection" className={classnames(styles.link, styles.contact)}>
        <li className={styles.text}>contact</li>
      </a>
    </ul>

    <div className={styles.bubbles}>
      <Link title="Portfolio" to="/portfolio/" className={classnames(styles.bubble, styles.portfolio)}>
        <Bubble_1 className={styles.bubbleBackground} />
        <Bubble_1 className={styles.bubbleBackgroundPulse} />
        <Icon className={styles.icon} icon="portfolio" />
      </Link>
      <a title="Über mich" href="/#aboutSection" className={classnames(styles.bubble, styles.about)}>
        <Bubble_2 className={styles.bubbleBackground} />
        <Bubble_2 className={styles.bubbleBackgroundPulse} />
        <Icon className={styles.icon} icon="home" />
      </a>
      <a title="Kontakt" href="/#contactSection" className={classnames(styles.bubble, styles.contact)}>
        <Bubble_3 className={styles.bubbleBackground} />
        <Bubble_3 className={styles.bubbleBackgroundPulse} />
        <Icon className={styles.icon} icon="mail" />
      </a>
    </div>
  </div>
);
