import styled from "styled-components";
import { Container } from "../shared/Container";

/**
 * Container for game table
 */
export const GameTableContainer = styled(Container)`
  width: 80%;
  margin: auto;
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
`;

/**
 * Header for game table
 */
export const GameTableHeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  font-size: 1.5em;
  font-weight: bold;

  & .btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
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
