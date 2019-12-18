import * as React from 'react';

import classnames from 'classnames';
import { TransitionState } from 'gatsby-plugin-transition-link';

import { Header } from '../../containers/HeaderContainer';
import { transitionDirection } from '../../containers/PageTransitionContainer';
import { Loading } from '../../patterns/Loading/Loading';
import { FooterComponent } from '../FooterComponent/FooterComponent';

import styles from './layoutComponent.module.scss';

type transitionState = 'entering' | 'entered' | 'exiting' | 'exited';

interface TransitionStatus {
  current: object;
  entry: object;
  exit: object;
  mount: boolean;
  transitionStatus: transitionState;
}

interface Props {
  secondaryPage?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  pageTransitionDirection?: transitionDirection;
}

const isExiting = (state: transitionState) => {
  return state === 'exited' || state === 'exiting';
};

export const LayoutComponent: React.StatelessComponent<Props> = ({ secondaryPage, children, loading, pageTransitionDirection }) => {
  return (
    <TransitionState>
      {(transitionStatus: TransitionStatus) => (
        <main
          className={classnames(styles.main, {
            [styles.secondary]: secondaryPage,
            [styles.hidden]: isExiting(transitionStatus.transitionStatus)
          })}
        >
          <Loading className={classnames({ [styles.hidden]: !loading })} />

          <div className={classnames(styles.content, { [styles.hidden]: loading })}>
            <div className={styles.grain} />
            <Header secondaryPage={secondaryPage} pageTransitionDirection={pageTransitionDirection} />
            {children}
            <FooterComponent />
          </div>
        </main>
      )}
    </TransitionState>
  );
};
