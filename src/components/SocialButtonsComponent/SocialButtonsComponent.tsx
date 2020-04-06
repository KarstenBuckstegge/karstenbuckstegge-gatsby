import * as React from 'react';

import { Icon } from '../../patterns/Icon/Icon';

import classnames from 'classnames';

import styles from './socialButtonsComponent.module.scss';

interface Props {
  className?: string;
}

export const SocialButtonsComponent: React.FC<Props> = props => (
  <div className={classnames(styles.social, props.className)}>
    <a className={styles.socialButton} title="instagram" target="_blank" href="https://www.instagram.com/karstenbuckstegge/">
      <Icon className={styles.socialIcon} icon="instagram" />
    </a>
    <a className={styles.socialButton} title="behance" target="_blank" href="https://www.behance.net/karstenbuckstegge/">
      <Icon className={styles.socialIcon} icon="behance" />
    </a>
    <a className={styles.socialButton} title="github" target="_blank" href="https://www.github.com/karstenbuckstegge/">
      <Icon className={styles.socialIcon} icon="github" />
    </a>
    <a className={styles.socialButton} title="linkedin" target="_blank" href="https://www.linkedin.com/in/karstenbuckstegge/">
      <Icon className={styles.socialIcon} icon="linkedin" />
    </a>
    <a className={styles.socialButton} title="xing" target="_blank" href="https://www.xing.com/profile/Karsten_Buckstegge/">
      <Icon className={styles.socialIcon} icon="xing" />
    </a>
  </div>
);
