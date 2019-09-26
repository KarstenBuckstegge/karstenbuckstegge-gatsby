import * as React from 'react';

import classnames from 'classnames';

import styles from './button.module.scss';

interface OwnProps {
  color: 'green' | 'pink' | 'grey';
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

type Props = OwnProps & ButtonProps;

export const Button: React.StatelessComponent<Props> = props => {
  const { children, className, type, color } = props;

  return (
    <button className={classnames(styles.button, className, color ? styles[color] : '')} type={type}>
      {children}
    </button>
  );
};
