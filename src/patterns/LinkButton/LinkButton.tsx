import * as React from 'react';

import classnames from 'classnames';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { PageTransition, transitionDirection } from '../../containers/PageTransitionContainer';
import { ButtonColors, ButtonSizes } from '../Button/Button';

import ButtonStyles from '../Button/button.module.scss';
import styles from './linkButton.module.scss';

interface OwnProps {
  color: ButtonColors;
  size?: ButtonSizes;
  direction?: transitionDirection;
}

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  href: string;
  internal?: boolean;
  anchor?: boolean;
}

type Props = OwnProps & LinkButtonProps;

export const LinkButton: React.StatelessComponent<Props> = props => {
  const { children, className, color, size, href, internal, anchor, direction } = props;

  const classes = classnames(ButtonStyles.button, styles.linkButton, className, color && ButtonStyles[color], size && ButtonStyles[size]);

  if (internal) {
    return (
      <PageTransition className={classes} to={href} direction={direction}>
        <div className={ButtonStyles.content}>{children}</div>
      </PageTransition>
    );
  }

  if (anchor) {
    return (
      <AnchorLink className={classes} href={href}>
        <div className={ButtonStyles.content}>{children}</div>
      </AnchorLink>
    );
  }

  return (
    <a className={classes} href={href} target="_blank">
      <div className={ButtonStyles.content}>{children}</div>
    </a>
  );
};
