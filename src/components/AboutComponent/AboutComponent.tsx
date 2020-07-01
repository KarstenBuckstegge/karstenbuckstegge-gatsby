import * as React from 'react';

import classnames from 'classnames';

import { Headline } from '../../patterns/Headline/Headline';
import { LinkButton } from '../../patterns/LinkButton/LinkButton';
import { ObfuscatedLinkButton } from '../../patterns/ObfuscatedLinkButton/ObfuscatedLinkButton';
import { SocialButtonsComponent } from '../SocialButtonsComponent/SocialButtonsComponent';

import styles from './aboutComponent.module.scss';

import CV from '../../../static/Lebenslauf_KarstenBuckstegge_2020.pdf';

interface Props {
  condensed?: boolean;
  className?: string;
}

export const AboutComponent: React.StatelessComponent<Props> = props => (
  <section className={classnames(props.className, styles.about)} id="aboutSection">
    <Headline size="h3">Hi, ich bin Karsten!</Headline>
    <p className={styles.p}>
      Nach mehr als 5 Jahren als <span className={styles.green}>professioneller Frontend Entwickler</span>, habe ich mich entschieden neue
      Wege zu gehen und mein technisches Wissen mit meinen kreativen Fähigkeiten als{' '}
      <span className={styles.pink}>Illustrator and Mural Artist</span> zu kombinieren.
      <br />
      <br />
      Mit dieser Kombination bin ich in der Lage deine Idee auf <span className={styles.pink}>einzigartige</span> und{' '}
      <span className={styles.green}>kreative</span> Weise zu visualisieren. Egal ob auf Leinwand, Display, Mauer oder sonstigem Medium.
      <br />
      Die Möglichkeiten sind grenzenlos.
      <br />
      <br />
      Klingt interessant?
    </p>
    {props.condensed ? (
      <>
        <p className={styles.p}>
          Dann lass dich nicht davon abhalten mich direkt zu kontaktieren oder weiter unten mein Portfolio zu durchstöbern.
        </p>
        <ObfuscatedLinkButton className={styles.contactButton} size="small" email="hallo@karstenbuckstegge.de">
          Email schreiben
        </ObfuscatedLinkButton>
        <ObfuscatedLinkButton className={styles.contactButton} size="small" tel="+4915165190124">
          Anrufen
        </ObfuscatedLinkButton>
        <LinkButton href={CV} color="grey" size="small" className={styles.contactButton}>
          Lebenslauf herunterladen
        </LinkButton>
        <SocialButtonsComponent className={styles.socialButtons} />
      </>
    ) : (
      <div className={styles.buttonContainer}>
        <LinkButton internal={true} href="/portfolio/" type="button" color="green" className={styles.portfolio}>
          Besuche mein Portfolio
        </LinkButton>
        <LinkButton anchor={true} href="#contactSection" color="grey" className={styles.contact}>
          Kontaktiere mich!
        </LinkButton>
      </div>
    )}
  </section>
);
