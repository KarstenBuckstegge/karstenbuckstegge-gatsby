import * as React from 'react';

import classnames from 'classnames';

import DesignIcon from '../../../svg/icons/design.svg';
import DevelopmentIcon from '../../../svg/icons/dev.svg';
import ExperimentalIcon from '../../../svg/icons/experimental.svg';
import IllustrationIcon from '../../../svg/icons/illustration.svg';
import MuralIcon from '../../../svg/icons/mural.svg';

import styles from './icon.module.scss';

type Icon = 'illustration' | 'development' | 'mural' | 'experimental' | 'design';

type Components = {
  [key in Icon]: React.FC;
};

interface Props {
  icon: Icon;
  className?: string;
}

const components: Components = {
  design: DesignIcon,
  development: DevelopmentIcon,
  experimental: ExperimentalIcon,
  illustration: IllustrationIcon,
  mural: MuralIcon
};

export const Icon: React.FC<Props> = props => {
  const IconComponent = components[props.icon];
  return (
    <div className={classnames(props.className, styles.iconWrapper)}>
      <IconComponent />
    </div>
  );
};
