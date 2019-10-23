import * as React from 'react';

import classnames from 'classnames';

import FormSVG from '../../../svg/form.svg';

import styles from './input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

interface OwnProps {
  label?: string;
  className?: string;
}

type Props = InputProps & OwnProps;

export const Input: React.FC<Props> = props => {
  const { type, name, id, label, className } = props;

  const [filled, setFilled] = React.useState(false);

  const onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    setFilled(value.length > 0);
  };

  const classes = classnames(className, styles.container);

  const inputClasses = classnames(styles.input, {
    [styles.filled]: filled
  });

  return (
    <div className={classes}>
      <input className={inputClasses} type={type} name={name} id={id} onChange={onChange} />
      <label className={styles.label}>{label}</label>
      <FormSVG className={styles.underline} />
    </div>
  );
};
