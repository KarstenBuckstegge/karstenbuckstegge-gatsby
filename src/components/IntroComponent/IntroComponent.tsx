import * as React from 'react';

import classnames from 'classnames';

import HR from '../../../svg/hr.svg';

import styles from './introComponent.module.scss';

export const IntroComponent: React.StatelessComponent<{}> = () => {
  return (
    <section className={styles.intro}>
      <h1 className={styles.title}>
        <div className={classnames(styles.names, styles.firstName)}>
          <span className={classnames(styles.letter, styles.firstNameLetter1)}>K</span>
          <span className={classnames(styles.letter, styles.firstNameLetter2)}>A</span>
          <span className={classnames(styles.letter, styles.firstNameLetter3)}>R</span>
          <span className={classnames(styles.letter, styles.firstNameLetter4)}>S</span>
          <span className={classnames(styles.letter, styles.firstNameLetter5)}>T</span>
          <span className={classnames(styles.letter, styles.firstNameLetter6)}>E</span>
          <span className={classnames(styles.letter, styles.firstNameLetter7)}>N</span>
        </div>
        <HR className={styles.hr} />
        <div className={classnames(styles.names, styles.lastName)}>
          <span className={classnames(styles.letter, styles.lastNameLetter1)}>B</span>
          <span className={classnames(styles.letter, styles.lastNameLetter2)}>U</span>
          <span className={classnames(styles.letter, styles.lastNameLetter3)}>C</span>
          <span className={classnames(styles.letter, styles.lastNameLetter4)}>K</span>
          <span className={classnames(styles.letter, styles.lastNameLetter5)}>S</span>
          <span className={classnames(styles.letter, styles.lastNameLetter6)}>T</span>
          <span className={classnames(styles.letter, styles.lastNameLetter7)}>E</span>
          <span className={classnames(styles.letter, styles.lastNameLetter8)}>GG</span>
          <span className={classnames(styles.letter, styles.lastNameLetter9)}>E</span>
        </div>
      </h1>
      <h2 className={styles.subtitle}>Visual Artist</h2>
    </section>
  );
};
