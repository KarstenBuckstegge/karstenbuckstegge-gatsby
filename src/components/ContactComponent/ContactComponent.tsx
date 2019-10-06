import * as React from 'react';

import { Button } from '../../patterns/Button/Button';
import { Headline } from '../../patterns/Headline/Headline';
import { Input } from '../../patterns/Input/Input';
import { Textarea } from '../../patterns/Textarea/Textarea';

import styles from './contactComponent.module.scss';

interface Props {
  className?: string;
}

export const ContactComponent: React.StatelessComponent<Props> = props => (
  <section className={props.className} id="contactSection">
    <Headline>talk to me...</Headline>
    <form className={styles.form} action="">
      <Input type="text" name="name" id="name" label="Name" autoComplete="name" required={true} />
      <Input type="email" name="email" id="email" label="Email" autoComplete="email" required={true} />
      <Input type="text" name="topic" id="topic" label="Topic" required={true} />
      <Textarea name="message" id="message" label="Your Message" rows={2} required={true} />
      <Button className={styles.button} color="green" size="small">
        Send
      </Button>
    </form>
  </section>
);
