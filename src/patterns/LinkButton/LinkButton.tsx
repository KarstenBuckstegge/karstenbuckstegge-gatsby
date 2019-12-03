import { Link } from 'gatsby';
import * as React from 'react';

import classnames from 'classnames';

import { ButtonColors, ButtonSizes } from '../Button/Button';

import ButtonStyles from '../Button/button.module.scss';
import styles from './linkButton.module.scss';

interface OwnProps {
  color: ButtonColors;
  size?: ButtonSizes;
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
        <div className={ButtonStyles.content}>{children}</div>
      </Link>
    );
  }

  return (
    <a className={classes} href={href}>
      <div className={ButtonStyles.content}>{children}</div>
    </a>
  );
};
