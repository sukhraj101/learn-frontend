import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

function CustomButton({
  size = 'medium',
  variant = 'contained',
  color = 'primary',
  children,
  ...props
}) {
  return (
    <Button
      size={size}
      variant={variant}
      color={color}
      {...props}
    >
      {children}
    </Button>
  );
}

// ✅ Add prop-types validation
CustomButton.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'error',
    'info',
    'success',
    'warning',
    'inherit',
  ]),
  children: PropTypes.node.isRequired,
};

export default CustomButton;
