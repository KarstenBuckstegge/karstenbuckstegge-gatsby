import * as React from 'react';

import classnames from 'classnames';

import { Stream } from '../../containers/StreamContainer';
import { AboutComponent } from '../AboutComponent/AboutComponent';
import { ContactComponent } from '../ContactComponent/ContactComponent';
import { IntroComponent } from '../IntroComponent/IntroComponent';
import { LayoutComponent } from '../LayoutComponent/LayoutComponent';

import styles from './indexComponent.module.scss';

export const IndexComponent: React.StatelessComponent<{}> = () => (
  <LayoutComponent>
    <Stream />
    <IntroComponent className={styles.section} />
    <AboutComponent className={classnames(styles.section, styles.about)} />
    <ContactComponent className={classnames(styles.section, styles.contact)} />
  </LayoutComponent>
);
