import { useState, useEffect, useMemo, useCallback } from 'react';
import { fetchBoard } from '../api/gameApi';
import type { Game, GameStatus, UseGameLogicReturn } from '../types/game';

export const useGameLogic = (): UseGameLogicReturn => {
  const [gameData, setGameData] = useState<Game | null>(null);
  const [revealedCells, setRevealedCells] = useState<Set<string>>(new Set());
  const [currentScore, setCurrentScore] = useState(0);
  const [status, setStatus] = useState<GameStatus>('idle');

  const startNewGame = useCallback(async () => {
    setStatus('loading');
    setRevealedCells(new Set());
    setCurrentScore(0);

    try {
      const data = await fetchBoard();
      setGameData(data);
      setStatus('playing');
    } catch (error) {
      console.error('Failed to fetch board:', error);
      setStatus('idle');
    }
  }, []);

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  const handleCellFlip = useCallback((row: number, col: number) => {
    if (!gameData || status !== 'playing') return;

    const cellKey = `${row}-${col}`;
    if (revealedCells.has(cellKey)) return;

    const cell = gameData.board[row][col];
    const newRevealed = new Set(revealedCells);
    newRevealed.add(cellKey);
    setRevealedCells(newRevealed);

    if (cell.isWinning) {
      const newScore = currentScore + gameData.amountPerWin;
      setCurrentScore(newScore);

      const totalCells = gameData.board.flat().length;
      const totalMines = gameData.board.flat().filter(c => !c.isWinning).length;
      const safeToReveal = totalCells - totalMines;

      if (newRevealed.size === safeToReveal) {
        setStatus('won');
      }
    } else {
      setStatus('lost');
      setCurrentScore(0);

      const allMines = new Set<string>();
      gameData.board.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (!cell.isWinning) {
            allMines.add(`${rowIndex}-${colIndex}`);
          }
        });
      });
      setRevealedCells(allMines);
    }
  }, [gameData, status, revealedCells, currentScore]);

  const handleCashOut = useCallback(() => {
    if (status !== 'playing' || revealedCells.size === 0) return;
    setStatus('cashed_out');
  }, [status, revealedCells.size]);

  const handleRestart = useCallback(() => {
    startNewGame();
  }, [startNewGame]);

  const simplifiedBoard = useMemo(() =>
    gameData?.board.map(row => row.map(cell => cell.isWinning)) ?? [],
    [gameData?.board]
  );

  const canCashOut = status === 'playing' && revealedCells.size > 0;
  const isGridDisabled = status !== 'playing';
  const isWinner = status === 'won' || status === 'cashed_out';

  return {
    gameData,
    revealedCells,
    currentScore,
    status,
    simplifiedBoard,
    canCashOut,
    isGridDisabled,
    isWinner,
    handleCellFlip,
    handleCashOut,
    handleRestart,
  };
};
