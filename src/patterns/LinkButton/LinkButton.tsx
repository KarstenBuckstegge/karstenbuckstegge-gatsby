import * as React from 'react';

import classnames from 'classnames';

import ButtonStyles from '../Button/button.module.scss';
import styles from './linkButton.module.scss';

interface OwnProps {
  color: 'green' | 'pink' | 'grey';
  size?: 'small';
}

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  href: string;
}

type Props = OwnProps & LinkButtonProps;

export const LinkButton: React.StatelessComponent<Props> = props => {
  const { children, className, type, color, size, href } = props;

  const classes = classnames(ButtonStyles.button, styles.linkButton, className, color && ButtonStyles[color], size && ButtonStyles[size]);

  return (
    <a className={classes} type={type} href={href}>
      {children}
    </a>
  );
};
