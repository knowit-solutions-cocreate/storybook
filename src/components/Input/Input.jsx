// ABOUTME: Input component with Knowit brand styling
// ABOUTME: Provides text input with label, error states, and accessibility support

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

export const Input = ({
  label,
  error,
  placeholder,
  value,
  onChange,
  type = 'text',
  disabled = false,
  size = 'medium',
  ...rest
}) => {
  const inputId = rest.id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const errorId = error ? `${inputId}-error` : undefined;

  const classNames = [
    styles.input,
    styles[size],
    error ? styles.error : '',
    disabled ? styles.disabled : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className={classNames}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={errorId}
        {...rest}
      />
      {error && (
        <span id={errorId} className={styles.errorMessage} role="alert">
          {error}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};
