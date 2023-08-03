import React from 'react';
import styles from './FormsControls.module.css';

const FormControl = ({ input, meta: { touched, error }, children, ...props }) => {
  const hasError = touched && error;

  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
