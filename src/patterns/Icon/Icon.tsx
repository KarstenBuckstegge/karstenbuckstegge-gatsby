import * as React from 'react';

import classnames from 'classnames';

import ArrowIcon from '../../../svg/icons/arrow.svg';
import BehanceIcon from '../../../svg/icons/behance.svg';
import DesignIcon from '../../../svg/icons/design.svg';
import DevelopmentIcon from '../../../svg/icons/dev.svg';
import ExperimentalIcon from '../../../svg/icons/experimental.svg';
import GithubIcon from '../../../svg/icons/github.svg';
import HomeIcon from '../../../svg/icons/home.svg';
import IllustrationIcon from '../../../svg/icons/illustration.svg';
import InstagramIcon from '../../../svg/icons/instagram.svg';
import LinkIcon from '../../../svg/icons/link.svg';
import LinkedinIcon from '../../../svg/icons/linkedin.svg';
import MailIcon from '../../../svg/icons/mail.svg';
import MuralIcon from '../../../svg/icons/mural.svg';
import PortfolioIcon from '../../../svg/icons/portfolio.svg';
import WebIcon from '../../../svg/icons/web.svg';
import XingIcon from '../../../svg/icons/xing.svg';

import styles from './icon.module.scss';

type Icon =
  | 'arrow'
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
  | 'home'
  | 'portfolio'
  | 'mail'
  | 'web'
  | 'github';

type Components = {
  [key in Icon]: React.FC;
};

interface Props {
  icon: Icon;
  className?: string;
}

const components: Components = {
  arrow: ArrowIcon,
  behance: BehanceIcon,
  design: DesignIcon,
  development: DevelopmentIcon,
  experimental: ExperimentalIcon,
  github: GithubIcon,
  home: HomeIcon,
  illustration: IllustrationIcon,
  instagram: InstagramIcon,
  link: LinkIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
  mural: MuralIcon,
  portfolio: PortfolioIcon,
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
