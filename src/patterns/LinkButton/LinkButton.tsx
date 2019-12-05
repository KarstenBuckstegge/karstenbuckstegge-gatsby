import * as React from 'react';

import classnames from 'classnames';

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
}

type Props = OwnProps & LinkButtonProps;

export const LinkButton: React.StatelessComponent<Props> = props => {
  const { children, className, color, size, href, internal, direction } = props;

  const classes = classnames(ButtonStyles.button, styles.linkButton, className, color && ButtonStyles[color], size && ButtonStyles[size]);

  if (internal) {
    return (
      <PageTransition className={classes} to={href} direction={direction}>
        <div className={ButtonStyles.content}>{children}</div>
      </PageTransition>
    );
  }

  return (
    <a className={classes} href={href}>
      <div className={ButtonStyles.content}>{children}</div>
    </a>
  );
};
