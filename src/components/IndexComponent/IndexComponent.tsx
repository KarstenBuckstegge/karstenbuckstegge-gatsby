import * as React from 'react';

import { LayoutComponent } from '../LayoutComponent/LayoutComponent';

import { Stream } from '../../containers/StreamContainer';
import { AboutComponent } from '../AboutComponent/AboutComponent';
import { ContactComponent } from '../ContactComponent/ContactComponent';
import { IntroComponent } from '../IntroComponent/IntroComponent';

import styles from './indexComponent.module.scss';

export const IndexComponent: React.StatelessComponent<{}> = () => (
  <LayoutComponent>
    <Stream />
    <IntroComponent />
    <AboutComponent className={styles.about} />
    <ContactComponent className={styles.contact} />
  </LayoutComponent>
);
