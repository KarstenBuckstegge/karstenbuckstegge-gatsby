import * as React from 'react';

import { Headline } from '../../patterns/Headline/Headline';
import { Input } from '../../patterns/Input/Input';

interface Props {
  className?: string;
}

export const ContactComponent: React.StatelessComponent<Props> = props => (
  <section className={props.className}>
    <Headline>talk to me...</Headline>
    <form action="">
      <Input type="text" name="name" id="name" label="Name" autoComplete="name" required={true} />
      <Input type="email" name="email" id="email" label="Email" autoComplete="email" required={true} />
      <Input type="text" name="topic" id="topic" label="Topic" required={true} />
      <textarea name="message" id="message" cols={30} rows={10} required={true} />
    </form>
  </section>
);
