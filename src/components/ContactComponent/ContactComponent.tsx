import * as React from 'react';

import classnames from 'classnames';
import Obfuscate from 'react-obfuscate';

import { Headline } from '../../patterns/Headline/Headline';
import { Icon } from '../../patterns/Icon/Icon';
import { LinkButton } from '../../patterns/LinkButton/LinkButton';

import ButtonStyles from '../../patterns/Button/button.module.scss';
import LinkButtonStyles from '../../patterns/LinkButton/linkButton.module.scss';
import styles from './contactComponent.module.scss';

interface Props {
  className?: string;
}

export const ContactComponent: React.StatelessComponent<Props> = props => (
  <section className={props.className} id="contactSection">
    <Headline size="h3">Sprich mit mir...</Headline>
    <div className={styles.buttons}>
      <Obfuscate
        className={classnames(ButtonStyles.button, LinkButtonStyles.linkButton, ButtonStyles.grey, styles.button)}
        email="hallo@karstenbuckstegge.de"
      >
        <Icon icon="mail" />
        Email
      </Obfuscate>
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
