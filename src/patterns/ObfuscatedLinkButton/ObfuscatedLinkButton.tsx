import * as React from 'react';

import classnames from 'classnames';
import Obfuscate from 'react-obfuscate';

import { ButtonSizes } from '../Button/Button';
import { Icon } from '../Icon/Icon';

import ButtonStyles from '../Button/button.module.scss';
import LinkButtonStyles from '../LinkButton/linkButton.module.scss';

interface Props {
  email?: string;
  tel?: string;
  size?: ButtonSizes;
  className?: string;
  children: React.ReactNode;
}

export const ObfuscatedLinkButton: React.FC<Props> = props => (
  <Obfuscate
    className={classnames(
      ButtonStyles.button,
      LinkButtonStyles.linkButton,
      ButtonStyles.grey,
      props.className,
      props.size && ButtonStyles[props.size]
    )}
    email={props.email}
    tel={props.tel}
  >
    <div className={ButtonStyles.content}>
      {props.size !== 'small' && <Icon icon="mail" />}
      {props.children}
    </div>
  </Obfuscate>
);
