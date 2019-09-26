import * as React from 'react';

import { LayoutComponent } from '../LayoutComponent/LayoutComponent';

import { AboutComponent } from '../AboutComponent/AboutComponent';
import { IntroComponent } from '../IntroComponent/IntroComponent';
import { StreamComponent } from '../StreamComponent/streamComponent';

import styles from './indexComponent.module.scss';

export const IndexComponent: React.StatelessComponent<{}> = () => (
  <LayoutComponent>
    <StreamComponent />
    <IntroComponent />
    <AboutComponent className={styles.about} />
  </LayoutComponent>
);
