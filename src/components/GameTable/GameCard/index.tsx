import { createRef, useEffect, FC } from "react";

import { GameCardContainer, GameIconStyled } from "./styled";
import useCards, { InfoCard as GameCardProps } from "@/hooks/useCards";
import { DEFAULT_ICON } from "@/constants";

/**
 * Card for the game table where I can click
 * @returns
 */
const GameCard: FC<GameCardProps> = ({ type, id }) => {
  const { invisibleCards, selectedCards, selectCard } = useCards();
  const gameCard = createRef<HTMLDivElement>();

  // Check if the card should be invisible
  useEffect(() => {
    const invisibleCard = invisibleCards.some((card) => card.id === id);
    if (gameCard.current)
      gameCard.current.style.opacity = String(invisibleCard ? 0 : 1);
  }, [gameCard, id, invisibleCards]);

  // Click in the card
  const handleClick = () => {
    // Check if they are not invisible
    const invisibleCard = invisibleCards.some((card) => card.id === id);
    if (invisibleCard) return;

    // Check if already selected
    const card = selectedCards.some((card) => card.id === id);
    if (card) return;

    // Set a limit
    if (selectedCards.length === 2) return;

    // Add selected
    selectCard({ type, id });
  };

  return (
    <GameCardContainer
      onClick={handleClick}
      ref={gameCard}
      selected={selectedCards.some((card) => card.id === id)}
    >
      <GameIconStyled type={DEFAULT_ICON} />
      <GameIconStyled type={type} />
    </GameCardContainer>
  );
};

export default GameCard;
