import React from 'react';

import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import { useButton } from '@mui/base/ButtonUnstyled';

const orange = {
    500: '#e67e22',
    600: '#f39c12',
    700: '#FFC300',
};

const CustomButtonRoot = styled('button')`
    font-family: Roboto;
    font-weight: bold;
    font-size: 0.875rem;
    background-color: ${orange[500]};
    margin: 2px 4px 18px;
    padding: 12px 24px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
    &:hover {
      background-color: ${orange[600]};
    }
  
    &.active {
      background-color: ${orange[700]};
    }
  
    &.focusVisible {
      box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(4, 4, 4, 0.5);
      outline: none;
    }
  
    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  export const CustomButton = React.forwardRef(function CustomButton(props, ref) {
    const { children } = props;
    const { active, disabled, focusVisible, getRootProps } = useButton({
      ...props,
      ref,
      component: CustomButtonRoot,
    });

    const classes = {
        active,
        disabled,
        focusVisible,
    };
  
    return (
      <CustomButtonRoot 
        className={clsx(classes)}
        {...getRootProps()}
    >
        {children}
      </CustomButtonRoot>
    );
  });