import * as React from 'react';

import classnames from 'classnames';

import HR from '../../../svg/hr.svg';
import { Headline } from '../../patterns/Headline/Headline';

import styles from './introComponent.module.scss';

interface Props {
  className?: string;
}

export const IntroComponent: React.StatelessComponent<Props> = props => {
  return (
    <section className={classnames(props.className, styles.intro)} id="introSection">
      <Headline size="h1" className={styles.title}>
        <div>KARSTEN</div>
        <HR className={styles.hr} />
        <div>BUCKSTEGGE</div>
      </Headline>
      <Headline size="h2">Visual Artist</Headline>
    </section>
  );
};
