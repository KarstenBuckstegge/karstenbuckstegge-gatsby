import * as React from 'react';

import classnames from 'classnames';

import { Headline } from '../../patterns/Headline/Headline';
import { LinkButton } from '../../patterns/LinkButton/LinkButton';
import { ObfuscatedLinkButton } from '../../patterns/ObfuscatedLinkButton/ObfuscatedLinkButton';
import { SocialButtonsComponent } from '../SocialButtonsComponent/SocialButtonsComponent';

import styles from './aboutComponent.module.scss';

interface Props {
  condensed?: boolean;
  className?: string;
}

export const AboutComponent: React.StatelessComponent<Props> = props => (
  <section className={classnames(props.className, styles.about)} id="aboutSection">
    <Headline size="h3">Hi, my name is Karsten!</Headline>
    <p className={styles.p}>
      After being a <span className={styles.green}>professional frontend developer</span> for 5+ years, I decided to take on new paths and
      combine my technical knowledge with my creative side projects as an <span className={styles.pink}>illustrator and mural artist</span>.
      <br />
      <br />
      With that knowledge I am able to create <span className={styles.pink}>unique</span> and <span className={styles.green}>creative</span>{' '}
      ways to visualize your ideas on cavas, display, wall or whatever medium you can imagine.
      <br />
      <br />
      Sounds interesting?
    </p>
    {props.condensed ? (
      <>
        <p className={styles.p}>Feel free to contact me or check out my portfolio below!</p>
        <ObfuscatedLinkButton className={styles.contactButton} size="small" email="hallo@karstenbuckstegge.de">
          Email
        </ObfuscatedLinkButton>
        <ObfuscatedLinkButton className={styles.contactButton} size="small" tel="+4915165190124">
          Call me
        </ObfuscatedLinkButton>
        <SocialButtonsComponent className={styles.socialButtons} />
      </>
    ) : (
      <div className={styles.buttonContainer}>
        <LinkButton internal={true} href="/portfolio/" type="button" color="green" className={styles.portfolio}>
          visit my portfolio
        </LinkButton>
        <LinkButton anchor={true} href="#contactSection" color="grey" className={styles.contact}>
          contact me
        </LinkButton>
      </div>
    )}
  </section>
);
