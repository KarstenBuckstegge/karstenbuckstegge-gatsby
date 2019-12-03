import * as React from 'react';

import classnames from 'classnames';

import styles from './button.module.scss';

export type ButtonColors = 'green' | 'pink' | 'grey' | 'linkedIn' | 'xing';
export type ButtonSizes = 'small';

interface OwnProps {
  color: ButtonColors;
  size?: ButtonSizes;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

type Props = OwnProps & ButtonProps;

export const Button: React.StatelessComponent<Props> = props => {
  const { children, className, type, color, size } = props;

  const classes = classnames(styles.button, className, color && styles[color], size && styles[size]);

  return (
    <button className={classes} type={type}>
      {children}
    </button>
  );
};
