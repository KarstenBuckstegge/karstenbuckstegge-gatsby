import * as React from 'react';

import { Headline } from '../../patterns/Headline/Headline';
import { Icon } from '../../patterns/Icon/Icon';
import { LinkButton } from '../../patterns/LinkButton/LinkButton';
import { ObfuscatedLinkButton } from '../../patterns/ObfuscatedLinkButton/ObfuscatedLinkButton';

import styles from './contactComponent.module.scss';

import CV from '../../../static/Lebenslauf_KarstenBuckstegge_2020.pdf';

interface Props {
  className?: string;
}

export const ContactComponent: React.StatelessComponent<Props> = props => (
  <section className={props.className} id="contactSection">
    <Headline size="h3">Kontakt</Headline>
    <div className={styles.buttons}>
      <ObfuscatedLinkButton className={styles.button} email="hallo@karstenbuckstegge.de">
        Email
      </ObfuscatedLinkButton>
      <LinkButton className={styles.button} color="linkedIn" href="https://www.linkedin.com/in/karstenbuckstegge/">
        <Icon icon="linkedin" />
        LinkedIn
      </LinkButton>
      <LinkButton className={styles.button} color="xing" href="https://www.xing.com/profile/Karsten_Buckstegge/">
        <Icon icon="xing" />
        Xing
      </LinkButton>
    </div>
    <div className={styles.buttons}>
      <LinkButton className={styles.button} color="instagram" href="https://www.instagram.com/karstenbuckstegge/">
        <Icon icon="instagram" />
        Instagram
      </LinkButton>
      <LinkButton className={styles.button} color="behance" href="https://www.behance.net/karstenbuckstegge/">
        <Icon icon="behance" />
        behance
      </LinkButton>
      <LinkButton className={styles.button} color="github" href="https://www.github.com/karstenbuckstegge/">
        <Icon icon="github" />
        github
      </LinkButton>
    </div>
    <div className={styles.buttons}>
      <LinkButton href={CV} color="pink">
        Lebenslauf herunterladen
      </LinkButton>
    </div>
  </section>
);
