import * as React from 'react';

import classnames from 'classnames';

import styles from './loading.module.scss';

import LoadingSVG from '../../../svg/loading.svg';

const loadingTexts = [
  'Deine Seite ist auf dem Weg...',
  'Wir laden hier super wichtige Dinge...',
  'Aus großen Daten folgt große Verantwortung!',
  'Luke, I am your data!',
  'Du kannst nicht VORBEI!',
  'THIS. IS. DATAAA!',
  'Multipass?!',
  'Also gut, einigen wir uns auf Unentschieden!',
  'Die Daten machen die Website erst richtig gemütlich...',
  "Remember! Reality's an illusion, the universe is a hologram, buy gold!",
  'Give me the Bits!'
];

interface Props {
  className?: string;
}

export const Loading: React.FC<Props> = props => {
  const [text, setText] = React.useState('Deine Seite ist auf dem Weg...');

  const getLoadingText = () => {
    setTimeout(() => {
      const rand = Math.round(Math.random() * loadingTexts.length);

      setText(loadingTexts[rand]);
      getLoadingText();
    }, 5000);
  };

  React.useEffect(() => getLoadingText(), []);

  return (
    <div className={classnames(styles.loading, props.className)}>
      <LoadingSVG />
      <p className={styles.text}>"{text}"</p>
    </div>
  );
};
