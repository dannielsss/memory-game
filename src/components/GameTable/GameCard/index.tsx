import React, { createRef, useContext, useEffect, useState } from 'react';

import TapIcon from '@/assets/tap-icon.svg';
import BallIcon from '@/assets/ball-icon.svg';
import BookIcon from '@/assets/book-icon.svg';
import CarIcon from '@/assets/car-icon.svg';
import GuitarIcon from '@/assets/guitar-icon.svg';
import PhoneIcon from '@/assets/phone-icon.svg';
import TvIcon from '@/assets/tv-icon.svg';

import { GameCardContainer } from './styled';
import { GameContext } from '@/context/Game/GameContext';

interface Props {
  type?: 'ball' | 'book' | 'car' | 'guitar' | 'phone' | 'tv' | string;
  id: number;
}

/**
 * Card for the game table where I can click
 * @returns
 */
const GameCard: React.FC<Props> = ({ type, id }) => {
  const { invisibleCards, selectedCards, dispatch } = useContext(GameContext);
  const gameCard = createRef<HTMLDivElement>();

  // Check if the card should be invisible
  useEffect(() => {
    const invisibleCard = invisibleCards.find((card) => card.id === id);
    if (gameCard.current) {
      gameCard.current.style.visibility = invisibleCard ? 'hidden' : 'visible';
    }
  }, [invisibleCards]);

  // Click in the card
  const handleClick = () => {
    // Check if they are not invisible
    const invisibleCard = invisibleCards.find((card) => card.id === id);
    if (invisibleCard) return;

    // Check if already selected
    const card = selectedCards.find((card) => card.id === id);
    if (card) return;

    // Set a limit
    if (selectedCards.length === 2) return;

    // Add selected
    dispatch({ type: 'SELECT_CARD', payload: { name: type, id } });
  };

  // Default image for the card
  const DefaultIcon = () => {
    return <img src={TapIcon} alt="" />;
  };

  // Image for the card
  const CardIcon = () => {
    switch (type) {
      case 'ball':
        return <img src={BallIcon} alt="" />;
      case 'book':
        return <img src={BookIcon} alt="" />;
      case 'car':
        return <img src={CarIcon} alt="" />;
      case 'guitar':
        return <img src={GuitarIcon} alt="" />;
      case 'phone':
        return <img src={PhoneIcon} alt="" />;
      case 'tv':
        return <img src={TvIcon} alt="" />;
      default:
        return <p>Error loading card icon</p>;
    }
  };

  return (
    <GameCardContainer onClick={handleClick} ref={gameCard}>
      {selectedCards.find((card) => card.id === id) ? (
        <CardIcon />
      ) : (
        <DefaultIcon />
      )}
    </GameCardContainer>
  );
};

export default GameCard;
