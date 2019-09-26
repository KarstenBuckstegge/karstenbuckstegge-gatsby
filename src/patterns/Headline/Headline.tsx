import * as React from 'react';

import styles from './headline.module.scss';

export const Headline: React.StatelessComponent<{}> = props => <h3 className={styles.h3}>{props.children}</h3>;
