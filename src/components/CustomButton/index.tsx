import React from 'react';
import { Button } from './styled';

interface Props {
  variant: 'primary' | 'secondary';
  width: string;
  value: string;
  onClick?: () => void;
}

/**
 * Customizable button
 * @returns
 */
const CustomButton: React.FC<Props> = ({ variant, width, value, onClick }) => {
  return (
    <Button variant={variant} width={width} onClick={onClick}>
      {value}
    </Button>
  );
};

export default CustomButton;
