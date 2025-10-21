// ABOUTME: Card component with Knowit brand styling and flexible layout options.
// ABOUTME: Supports multiple color variants, optional header/footer, and custom content.

import PropTypes from 'prop-types';
import styles from './Card.module.css';

export const Card = ({
  variant = 'default',
  children,
  header,
  footer,
  className = '',
  ...rest
}) => {
  const cardClasses = [
    styles.card,
    styles[variant],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} {...rest}>
      {header && <div className={styles.header}>{header}</div>}
      <div className={styles.body}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

Card.propTypes = {
  variant: PropTypes.oneOf(['default', 'lightPurple', 'lightPink', 'purple']),
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
  footer: PropTypes.node,
  className: PropTypes.string,
};
