import { Dispatch, createContext } from 'react';

export type TypeGameCard =
  | 'ball'
  | 'book'
  | 'car'
  | 'guitar'
  | 'phone'
  | 'tv'
  | string;

/**
 * Card interface type
 */
export interface Card {
  name?: TypeGameCard;
  id: number;
}

/**
 * Actions for reducer
 */
export type Action =
  | { type: 'RESET_GAME' }
  | { type: 'SELECT_CARD'; payload: Card }
  | { type: 'CLEAN_SELECTED_CARDS' }
  | { type: 'SET_CARDS_INVISIBLE' };

/**
 * Interface for game context state
 */
export interface GameContextState {
  cards: Card[]; // All cards
  selectedCards: Card[]; // Selected cards pass to invisible cards if they are the same
  invisibleCards: Card[]; // If the are same to 'cards', means that you are win

  dispatch: Dispatch<Action>;
}

/**
 * Initial state for game context
 */
export const INITIAL_STATE: GameContextState = {
  cards: [
    { name: 'ball', id: 1 },
    { name: 'ball', id: 2 },
    { name: 'car', id: 3 },
    { name: 'car', id: 4 },
    { name: 'phone', id: 5 },
    { name: 'phone', id: 6 },
    { name: 'tv', id: 7 },
    { name: 'tv', id: 8 },
    { name: 'guitar', id: 9 },
    { name: 'guitar', id: 10 },
    { name: 'book', id: 11 },
    { name: 'book', id: 12 },
  ],
  selectedCards: [],
  invisibleCards: [],

  dispatch: () => null,
};

/**
 * Game Context
 */
export const GameContext = createContext<GameContextState>(INITIAL_STATE);
