import * as React from 'react';

import classnames from 'classnames';

import { Loading } from '../../patterns/Loading/Loading';
import { HeaderComponent } from '../HeaderComponent/HeaderComponent';

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
    <main className={styles.main}>
      <Loading className={classnames({ [styles.hidden]: !loading })} />

      <div className={classnames(styles.content, { [styles.hidden]: loading })}>
        <div className={styles.grain} />
        <HeaderComponent secondaryPage={secondaryPage} />
        {children}
      </div>
    </main>
  );
};
