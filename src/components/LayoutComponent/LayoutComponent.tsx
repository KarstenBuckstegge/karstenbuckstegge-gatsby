import * as React from 'react';

import classnames from 'classnames';

import { Header } from '../../containers/HeaderContainer';
import { Loading } from '../../patterns/Loading/Loading';
import { FooterComponent } from '../FooterComponent/FooterComponent';

import styles from './layoutComponent.module.scss';

interface Props {
  secondaryPage?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

export const LayoutComponent: React.StatelessComponent<Props> = ({ secondaryPage, children, loading }) => {
  // require('smooth-scroll')('a[href*="#"]', {
  //   speed: 600
  // });

  return (
    <main className={classnames(styles.main, { [styles.secondary]: secondaryPage })}>
      <Loading className={classnames({ [styles.hidden]: !loading })} />

      <div className={classnames(styles.content, { [styles.hidden]: loading })}>
        <div className={styles.grain} />
        <Header secondaryPage={secondaryPage} />
        {children}
        <FooterComponent />
      </div>
    </main>
  );
};
