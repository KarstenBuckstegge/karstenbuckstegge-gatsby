import * as React from 'react';

import classnames from 'classnames';

import { Stream } from '../../containers/StreamContainer';
import { AboutComponent } from '../AboutComponent/AboutComponent';
import { ContactComponent } from '../ContactComponent/ContactComponent';
import { IntroComponent } from '../IntroComponent/IntroComponent';
import { LayoutComponent } from '../LayoutComponent/LayoutComponent';

import styles from './indexComponent.module.scss';

interface State {
  loading: boolean;
}

export class IndexComponent extends React.Component<{}, State> {
  public state = { loading: true };

  public render() {
    return (
      <LayoutComponent loading={this.state.loading}>
        <Stream onLoad={this.onLoadStream} />
        <IntroComponent className={styles.section} />
        <AboutComponent className={classnames(styles.section, styles.about)} />
        <ContactComponent className={classnames(styles.section, styles.contact)} />
      </LayoutComponent>
    );
  }

  private onLoadStream = () => {
    this.setState({
      loading: false
    });
  };
}
