import * as React from 'react';

import classnames from 'classnames';

import styles from './loading.module.scss';

import LoadingSVG from '../../../svg/Loading.svg';

interface Props {
  className?: string;
}

export const Loading: React.StatelessComponent<Props> = props => <LoadingSVG className={classnames(styles.loading, props.className)} />;
