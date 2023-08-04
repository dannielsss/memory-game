import { styled } from 'styled-components';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  width: string;
}

/**
 * Styles for the customizable button
 */
export const Button = styled.button<ButtonProps>`
  background: ${(props) =>
    (props.variant === 'primary' && '#ffffff') ||
    (props.variant === 'secondary' && '#000000')};
  color: ${(props) =>
    (props.variant === 'primary' && '#000000') ||
    (props.variant === 'secondary' && '#ffffff')};
  border: ${(props) =>
    (props.variant === 'primary' && '1px solid #000000') ||
    (props.variant === 'secondary' && 'none')};

  width: ${(props) => props.width};
  padding: 0.5rem;
  border-radius: 10px;
`;
