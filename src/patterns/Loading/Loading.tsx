import * as React from 'react';

import classnames from 'classnames';

import styles from './loading.module.scss';

import LoadingSVG from '../../../svg/loading.svg';

interface Props {
  className?: string;
}

export const Loading: React.StatelessComponent<Props> = props => <LoadingSVG className={classnames(styles.loading, props.className)} />;
