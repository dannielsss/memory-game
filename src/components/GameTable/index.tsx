import React, { useContext, useState } from 'react';
import { GameCardsGrid, GameTableContainer, GameTableHeader } from './styled';
import { GameContext } from '@/context/Game/GameContext';
import ResetIcon from '@/assets/reset-icon.svg';
import GameCard from './GameCard';
import ConfirmModal from '../ConfirmModal';

/**
 * Table containing the memory game
 * @returns
 */
const GameTable = () => {
  const [isShowModalConfirm, setIsShowModalConfirm] = useState(false);
  const { cards, dispatch } = useContext(GameContext);

  return (
    <GameTableContainer>
      {/*=== MODAL ===*/}
      <ConfirmModal
        handleAccept={() => dispatch({ type: 'RESET_GAME' })}
        setShow={setIsShowModalConfirm}
        show={isShowModalConfirm}
      />

      {/*=== HEADER ===*/}
      <GameTableHeader>
        <p>00:00</p>
        <div onClick={() => setIsShowModalConfirm(true)}>
          <img src={ResetIcon} alt="" />
        </div>
      </GameTableHeader>

      {/*=== CARDS ===*/}
      <GameCardsGrid>
        {cards.map((card) => (
          <GameCard type={card.name} id={card.id} key={card.id} />
        ))}
      </GameCardsGrid>
    </GameTableContainer>
  );
};

export default GameTable;
