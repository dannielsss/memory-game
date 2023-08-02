import { Action, GameContextState } from './GameContext';

/**
 * Reducer for game context
 * @param state
 * @param action
 */
export const gameReducer = (state: GameContextState, action: Action) => {
  switch (action.type) {
    /**
     * Reset all values for new game
     */
    case 'RESET_GAME':
      for (let i = 0; i < state.cards.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.cards[i], state.cards[j]] = [state.cards[j], state.cards[i]];
      }

      return { ...state, time: 600000, selectedCards: [], invisibleCards: [] };
    /**
     * Select a card and add to selectedCards
     */
    case 'SELECT_CARD':
      return {
        ...state,
        selectedCards: [...state.selectedCards, action.payload],
      };
    /**
     * If selectedCards no they are same, the selected cards are cleared
     */
    case 'CLEAN_SELECTED_CARDS':
      return {
        ...state,
        selectedCards: [],
      };
    /**
     * If selectedCards they are same, the selectedCards are add to invisibleCards
     */
    case 'SET_CARDS_INVISIBLE':
      return {
        ...state,
        invisibleCards: [...state.invisibleCards, ...state.selectedCards],
        selectedCards: [],
      };
    default:
      return state;
  }
};
