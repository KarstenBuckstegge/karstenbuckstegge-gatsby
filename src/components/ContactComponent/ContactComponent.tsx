import * as React from 'react';

import { Headline } from '../../patterns/Headline/Headline';
import { Icon } from '../../patterns/Icon/Icon';
import { LinkButton } from '../../patterns/LinkButton/LinkButton';
import { ObfuscatedLinkButton } from '../../patterns/ObfuscatedLinkButton/ObfuscatedLinkButton';

import styles from './contactComponent.module.scss';

interface Props {
  className?: string;
}

export const ContactComponent: React.StatelessComponent<Props> = props => (
  <section className={props.className} id="contactSection">
    <Headline size="h3">Sprich mit mir...</Headline>
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
  </section>
);
