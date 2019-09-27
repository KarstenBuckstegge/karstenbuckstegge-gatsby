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

interface State {
  filled: boolean;
}

export class Input extends React.Component<Props> {
  public state: State = {
    filled: false
  };
  public render() {
    const { type, name, id, label, className } = this.props;

    const classes = classnames(className, styles.container);

    const inputClasses = classnames(styles.input, {
      [styles.filled]: this.state.filled
    });

    return (
      <div className={classes}>
        <input className={inputClasses} type={type} name={name} id={id} onChange={this.onChange} />
        <label className={styles.label}>{label}</label>
        <FormSVG className={styles.underline} />
      </div>
    );
  }

  private onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    this.setState({
      filled: value.length > 0
    });
  };
}
