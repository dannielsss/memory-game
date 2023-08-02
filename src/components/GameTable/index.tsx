import React, { useContext } from 'react';
import { GameCardsGrid, GameTableContainer, GameTableHeader } from './styled';
import { GameContext } from '@/context/Game/GameContext';
import ResetIcon from '@/assets/reset-icon.svg';
import GameCard from './GameCard';

/**
 * Table containing the memory game
 * @returns
 */
const GameTable = () => {
  const { cards, dispatch } = useContext(GameContext);

  return (
    <GameTableContainer>
      <GameTableHeader>
        <p>00:00</p>
        <div onClick={() => dispatch({ type: 'RESET_GAME' })}>
          <img src={ResetIcon} alt="" />
        </div>
      </GameTableHeader>
      <GameCardsGrid>
        {cards.map((card) => (
          <GameCard type={card.name} id={card.id} key={card.id} />
        ))}
      </GameCardsGrid>
    </GameTableContainer>
  );
};

export default GameTable;
