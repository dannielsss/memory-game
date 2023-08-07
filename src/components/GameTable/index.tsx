import { GameCardsGrid, GameTableContainer } from "./styled";
import GameCard from "./GameCard";
import useCards from "@/hooks/useCards";
import GameTableHeader from "./GameTableHeader";

/**
 * Table containing the memory game
 * @returns
 */
const GameTable = () => {
  const { cards, resetCards } = useCards();

  return (
    <GameTableContainer>
      <GameTableHeader resetCards={resetCards} />
      <GameCardsGrid>
        {cards.map((card) => (
          <GameCard type={card.name} id={card.id} key={card.id} />
        ))}
      </GameCardsGrid>
    </GameTableContainer>
  );
};

export default GameTable;
