import * as React from 'react';

import classnames from 'classnames';

import { Button } from '../../patterns/Button/Button';
import { Headline } from '../../patterns/Headline/Headline';

import styles from './aboutComponent.module.scss';

interface Props {
  className?: string;
}

export const AboutComponent: React.StatelessComponent<Props> = props => (
  <section className={classnames(props.className, styles.about)} id="aboutSection">
    <Headline>what can I do for you?</Headline>
    <p className={styles.p}>
      After being a <span className={styles.green}>professional frontend developer</span> for 5 years, I decided to take on new paths and
      combine my technical knowledge with my creative side projects as an <span className={styles.pink}>illustrator and mural artist</span>.
      <br />
      <br />
      With that knowledge I am able to create <span className={styles.pink}>unique</span> and <span className={styles.green}>creative</span>{' '}
      ways to visualize your ideas on cavas, display, wall or whatever medium you can imagine.
    </p>
    <div className={styles.buttonContainer}>
      <Button type="button" color="green" className={styles.portfolio}>
        visit my portfolio
      </Button>
      <Button type="button" color="grey" className={styles.contact}>
        contact me
      </Button>
    </div>
  </section>
);
