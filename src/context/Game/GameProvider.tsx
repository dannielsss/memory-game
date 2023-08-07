import React, { useEffect, useReducer } from 'react';
import { GameContext, INITIAL_STATE } from './GameContext';
import { gameReducer } from './gameReducer';

interface Props {
  children: JSX.Element | JSX.Element[];
}

/**
 * Provider for game context
 * @returns
 */
const GameProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);
  const CARD_TIMEOUT = 500;

  // Made a new game
  useEffect(() => {
    dispatch({ type: 'RESET_GAME' });
  }, []);

  // Manage status of selected cards
  useEffect(() => {
    if (state.selectedCards.length === 2) {
      // Check if they are not the same
      if (state.selectedCards[0].name !== state.selectedCards[1].name) {
        setTimeout(() => {
          dispatch({ type: 'CLEAN_SELECTED_CARDS' });
        }, CARD_TIMEOUT);
        return;
      }

      // Delete selected cards because they are the same
      setTimeout(() => {
        dispatch({ type: 'SET_CARDS_INVISIBLE' });
      }, CARD_TIMEOUT);
    }
  }, [state.selectedCards]);

  // Manage win
  useEffect(() => {
    if (state.invisibleCards.length === state.cards.length) {
      dispatch({ type: 'RESET_GAME' });
    }
  }, [state.invisibleCards, state.cards]);

  return (
    <GameContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
