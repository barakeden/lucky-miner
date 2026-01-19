export interface Cell {
  isWinning: boolean;
}

export type GameStatus = 'idle' | 'loading' | 'playing' | 'won' | 'lost' | 'cashed_out';

export interface Game {
  board: Cell[][];
  amountPerWin: number;
  currentCoins: number;
  status: GameStatus;
}

export interface ScoreBoardProps {
  amountPerWin: number;
  currentScore: number;
}

export interface ControlsProps {
  onCashOut: () => void;
  onRestart: () => void;
  status: GameStatus;
  canCashOut: boolean;
}

export interface StatusMessageProps {
  status: GameStatus;
  currentScore: number;
}

export interface CardProps {
  isRevealed: boolean;
  isWinning: boolean;
  onFlip: () => void;
  disabled: boolean;
}

export interface GridProps {
  board: boolean[][];
  revealedCells: Set<string>;
  onCellFlip: (row: number, col: number) => void;
  disabled: boolean;
}