import * as React from 'react';

import classnames from 'classnames';

import BehanceIcon from '../../../svg/icons/behance.svg';
import DesignIcon from '../../../svg/icons/design.svg';
import DevelopmentIcon from '../../../svg/icons/dev.svg';
import ExperimentalIcon from '../../../svg/icons/experimental.svg';
import IllustrationIcon from '../../../svg/icons/illustration.svg';
import InstagramIcon from '../../../svg/icons/instagram.svg';
import LinkIcon from '../../../svg/icons/link.svg';
import LinkedinIcon from '../../../svg/icons/linkedin.svg';
import MuralIcon from '../../../svg/icons/mural.svg';
import WebIcon from '../../../svg/icons/web.svg';
import XingIcon from '../../../svg/icons/xing.svg';

import styles from './icon.module.scss';

type Icon =
  | 'illustration'
  | 'development'
  | 'mural'
  | 'experimental'
  | 'design'
  | 'behance'
  | 'linkedin'
  | 'instagram'
  | 'xing'
  | 'link'
  | 'web';

type Components = {
  [key in Icon]: React.FC;
};

interface Props {
  icon: Icon;
  className?: string;
}

const components: Components = {
  behance: BehanceIcon,
  design: DesignIcon,
  development: DevelopmentIcon,
  experimental: ExperimentalIcon,
  illustration: IllustrationIcon,
  instagram: InstagramIcon,
  link: LinkIcon,
  linkedin: LinkedinIcon,
  mural: MuralIcon,
  web: WebIcon,
  xing: XingIcon
};

export const Icon: React.FC<Props> = props => {
  const IconComponent = components[props.icon];
  return (
    <div className={classnames(props.className, styles.iconWrapper)}>
      <IconComponent />
    </div>
  );
};
