import * as React from 'react';

import classnames from 'classnames';

import FormSVG from '../../../svg/form.svg';

import styles from './textarea.module.scss';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

interface OwnProps {
  label?: string;
  className?: string;
}

type Props = TextareaProps & OwnProps;

export const Textarea: React.FC<Props> = props => {
  const { name, id, label, className, cols, rows } = props;

  const [filled, setFilled] = React.useState(false);

  const onChange = (event: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const value = event.currentTarget.value;

    setFilled(value.length > 0);
  };

  const classes = classnames(className, styles.container);

  const textareaClasses = classnames(styles.textarea, {
    [styles.filled]: filled
  });

  return (
    <div className={classes}>
      <textarea className={textareaClasses} name={name} id={id} cols={cols} rows={rows} onChange={onChange} />
      <label className={styles.label}>{label}</label>
      <FormSVG className={styles.underline} />
    </div>
  );
};
