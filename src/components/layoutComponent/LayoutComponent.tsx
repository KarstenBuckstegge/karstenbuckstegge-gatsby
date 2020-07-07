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

export const LayoutComponent: React.FC<Props> = ({ secondaryPage, children, loading, pageTransitionDirection }) => {
  const [isLoading, setIsLoading] = React.useState(loading);

  // Remove loading screen after a while if something didn't work (e.g. Safari < V12)
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  }, []);

  React.useEffect(() => {
    if (!loading) {
      setIsLoading(false);
    }
  }, [loading]);

  return (
    <TransitionState>
      {(transitionStatus: TransitionStatus) => (
        <main
          className={classnames(styles.main, {
            [styles.secondary]: secondaryPage,
            [styles.hidden]: isExiting(transitionStatus.transitionStatus)
          })}
        >
          <Loading className={classnames({ [styles.hidden]: !isLoading })} />

          <div className={classnames(styles.content, { [styles.hidden]: isLoading })}>
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
