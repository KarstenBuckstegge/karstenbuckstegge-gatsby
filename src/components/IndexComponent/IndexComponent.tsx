import * as React from 'react';

import { LayoutComponent } from '../LayoutComponent/LayoutComponent';

import { IntroComponent } from '../IntroComponent/IntroComponent';
import { StreamComponent } from '../StreamComponent/streamComponent';

// import styles from './indexComponent.module.scss';

export const IndexComponent: React.StatelessComponent<{}> = () => {
  return (
    <LayoutComponent>
      <StreamComponent />
      <IntroComponent />
    </LayoutComponent>
  );
};
