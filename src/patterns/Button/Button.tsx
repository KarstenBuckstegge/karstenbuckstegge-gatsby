import * as React from 'react';

import classnames from 'classnames';

import styles from './button.module.scss';

interface OwnProps {
  color: 'green' | 'pink' | 'grey';
  size?: 'small';
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
