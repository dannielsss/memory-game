import { Container } from '@/styled-components/Container.styled';
import styled from 'styled-components';

/**
 * Container for game table
 */
export const GameTableContainer = styled(Container)`
  width: 30%;
  margin: auto;
`;

/**
 * Header for game table
 */
export const GameTableHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  font-size: 1.5em;
  font-weight: bold;
`;

/**
 * Grid for cards
 */
export const GameCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 1.2rem;
`;
