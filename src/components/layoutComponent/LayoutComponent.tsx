import * as React from 'react';

import styles from './layoutComponent.module.scss';

interface Props {
  children: React.ReactNode;
}

export const LayoutComponent: React.StatelessComponent<Props> = ({ children }) => <main className={styles.main}>{children}</main>;
