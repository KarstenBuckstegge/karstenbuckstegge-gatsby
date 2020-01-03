import * as React from 'react';

import classnames from 'classnames';

import { Stream } from '../../containers/StreamContainer';
import { AboutComponent } from '../AboutComponent/AboutComponent';
import { ContactComponent } from '../ContactComponent/ContactComponent';
import { IntroComponent } from '../IntroComponent/IntroComponent';
import { LayoutComponent } from '../LayoutComponent/LayoutComponent';

import styles from './indexComponent.module.scss';

export interface Viewport {
  height: number;
  width: number;
}

interface Props {
  viewport: Viewport;
}

export const IndexComponent: React.FC<Props> = props => {
  const [loading, setLoading] = React.useState(true);

  const onLoadStream = () => {
    setLoading(false);
  };

  return (
    <LayoutComponent loading={loading || props.viewport.width === 0}>
      <Stream onLoad={onLoadStream} viewport={props.viewport} />
      <IntroComponent className={styles.section} />
      <AboutComponent className={classnames(styles.section, styles.about)} />
      <ContactComponent className={classnames(styles.section, styles.contact)} />
    </LayoutComponent>
  );
};
