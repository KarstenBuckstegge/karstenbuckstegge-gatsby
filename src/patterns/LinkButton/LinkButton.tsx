import { Link } from 'gatsby';
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
  internal?: boolean;
}

type Props = OwnProps & LinkButtonProps;

export const LinkButton: React.StatelessComponent<Props> = props => {
  const { children, className, color, size, href, internal } = props;

  const classes = classnames(ButtonStyles.button, styles.linkButton, className, color && ButtonStyles[color], size && ButtonStyles[size]);

  if (internal) {
    return (
      <Link className={classes} to={href}>
        {children}
      </Link>
    );
  }

  return (
    <a className={classes} href={href}>
      {children}
    </a>
  );
};
