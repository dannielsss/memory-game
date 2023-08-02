import { Action, GameContextState } from './GameContext';

/**
 * Reducer for game context
 * @param state
 * @param action
 */
export const gameReducer = (state: GameContextState, action: Action) => {
  switch (action.type) {
    case 'RESET_GAME':
      // Cards table regenerate
      for (let i = 0; i < state.cards.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.cards[i], state.cards[j]] = [state.cards[j], state.cards[i]];
      }

      // Reset values
      return { ...state, time: 600000, selectedCards: [], invisibleCards: [] };
    case 'SELECT_CARD':
      return {
        ...state,
        selectedCards: [...state.selectedCards, action.payload],
      };
    case 'CLEAN_SELECTED_CARDS':
      return {
        ...state,
        selectedCards: [],
      };
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
