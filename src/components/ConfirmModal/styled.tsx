import { Container } from '@/styled-components/Container.styled';
import { styled } from 'styled-components';

/**
 * Container for confirm modal
 */
export const ConfirmModalContainer = styled(Container)`
  position: fixed;
  width: 100%;
  height: 100%;

  z-index: 2;
  background: #000000f2;
`;

/**
 * Modal confirm content
 */
export const ConfirmModalContent = styled.div`
  background: #ffffff;
  color: #000000;
  border-radius: 10px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

/**
 * To position the buttons
 */
export const ConfirmModalButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
`;
