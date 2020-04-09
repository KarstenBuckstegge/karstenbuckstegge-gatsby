import * as React from 'react';

import { Button } from '../../patterns/Button/Button';
import { Headline } from '../../patterns/Headline/Headline';

import styles from './notFoundComponent.module.scss';

import NotFoundGif from '../../../static/not_found.gif';

export const NotFoundComponent: React.StatelessComponent = () => (
  <div className={styles.wrapper}>
    <img src={NotFoundGif} alt="" />
    <Headline size="h1">Hmm, Seite nicht gefunden!</Headline>
    <p>
      Vielleicht versteckt sie sich... <br /> Aber bis sie wieder auftaucht schau doch auf der Home Page vorbei.
    </p>
    <Button className={styles.button} size="small" color="green">
      Zur Home Page
    </Button>
  </div>
);
