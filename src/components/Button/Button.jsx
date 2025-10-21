// ABOUTME: Button component with Knowit brand styling
// ABOUTME: Provides primary, secondary, and outline variants with multiple sizes

import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  disabled = false,
  onClick,
  ...rest
}) => {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    disabled ? styles.disabled : ''
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classNames}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};
