import * as React from 'react';

import classnames from 'classnames';

import styles from './headline.module.scss';

interface Props {
  size: 'h1' | 'h2' | 'h3';
  className?: string;
}

export const Headline: React.StatelessComponent<Props> = props => {
  switch (props.size) {
    case 'h1':
      return <h1 className={classnames(props.className, styles.h1)}>{props.children}</h1>;
      break;
    case 'h2':
      return <h2 className={classnames(props.className, styles.h2)}>{props.children}</h2>;
      break;
    case 'h3':
      return <h3 className={classnames(props.className, styles.h3)}>{props.children}</h3>;
      break;
  }
};
