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

interface State {
  filled: boolean;
}

export class Textarea extends React.Component<Props> {
  public state: State = {
    filled: false
  };
  public render() {
    const { name, id, label, className, cols, rows } = this.props;

    const classes = classnames(className, styles.container);

    const textareaClasses = classnames(styles.textarea, {
      [styles.filled]: this.state.filled
    });

    return (
      <div className={classes}>
        <textarea className={textareaClasses} name={name} id={id} cols={cols} rows={rows} onChange={this.onChange} />
        <label className={styles.label}>{label}</label>
        <FormSVG className={styles.underline} />
      </div>
    );
  }

  private onChange = (event: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const value = event.currentTarget.value;

    this.setState({
      filled: value.length > 0
    });
  };
}
