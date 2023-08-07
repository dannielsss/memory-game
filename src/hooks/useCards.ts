import { GameContext, TypeGameCard } from "@/context/Game/GameContext";
import { useContext } from "react";

export interface InfoCard {
  type?: TypeGameCard;
  id: number;
}

export default function useCards() {
  const { invisibleCards, selectedCards, dispatch, cards } =
    useContext(GameContext);

  const selectCard = ({ type, id }: InfoCard) => {
    dispatch({ type: "SELECT_CARD", payload: { name: type, id } });
  };

  const resetCards = () => {
    dispatch({ type: "RESET_GAME" });
  };

  return {
    invisibleCards,
    selectedCards,
    selectCard,
    resetCards,
    cards,
  };
}
