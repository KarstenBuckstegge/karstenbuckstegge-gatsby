import * as React from 'react';

import classnames from 'classnames';

import styles from './button.module.scss';

export type ButtonColors = 'green' | 'pink' | 'blue' | 'grey' | 'linkedIn' | 'xing' | 'behance' | 'instagram' | 'web';
export type ButtonSizes = 'small';

interface OwnProps {
  color: ButtonColors;
  size?: ButtonSizes;
  active?: boolean;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

type Props = OwnProps & ButtonProps;

export const Button: React.StatelessComponent<Props> = props => {
  const { active, children, className, type, color, size, ...otherProps } = props;

  const classes = classnames(styles.button, className, color && styles[color], size && styles[size], { [styles.active]: active });

  return (
    <button {...otherProps} className={classes} type={type}>
      <div className={styles.content}>{children}</div>
    </button>
  );
};
