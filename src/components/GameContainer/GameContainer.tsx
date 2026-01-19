import { useState, useEffect } from 'react';
import { fetchBoard } from '../../api/gameApi';
import { Grid } from '../Grid/Grid';
import { ScoreBoard } from '../ScoreBoard/ScoreBoard';
import { Controls } from '../Controls/Controls';
import { StatusMessage } from '../StatusMessage/StatusMessage';
import type { Game, GameStatus } from '../../types/game';
import { Container, GameWrapper, Title } from './GameContainer.style';


export const GameContainer: React.FC = () => {
  const [gameData, setGameData] = useState<Game | null>(null);
  const [revealedCells, setRevealedCells] = useState<Set<string>>(new Set());
  const [currentScore, setCurrentScore] = useState(0);
  const [status, setStatus] = useState<GameStatus>('idle');

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = async () => {
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
  };

  const handleCellFlip = (row: number, col: number) => {
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

      // Reveal all mines
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
  };

  const handleCashOut = () => {
    if (status !== 'playing' || revealedCells.size === 0) return;
    setStatus('cashed_out');
  };

  const handleRestart = () => {
    startNewGame();
  };

  if (!gameData) {
    return (
      <Container>
        <GameWrapper>
          <Title>💎 Lucky Miner 💣</Title>
          <StatusMessage status="loading" currentScore={0} />
        </GameWrapper>
      </Container>
    );
  }

  const simplifiedBoard = gameData.board.map(row =>
    row.map(cell => cell.isWinning)
  );

  const canCashOut = status === 'playing' && revealedCells.size > 0;
  const isGridDisabled = status !== 'playing';

  return (
    <Container>
      <GameWrapper>
        <Title>💎 Lucky Miner 💣</Title>
        <ScoreBoard
          amountPerWin={gameData.amountPerWin}
          currentScore={currentScore}
        />
        <StatusMessage status={status} currentScore={currentScore} />
        <Grid
          board={simplifiedBoard}
          revealedCells={revealedCells}
          onCellFlip={handleCellFlip}
          disabled={isGridDisabled}
        />
        <Controls
          onCashOut={handleCashOut}
          onRestart={handleRestart}
          status={status}
          canCashOut={canCashOut}
        />
      </GameWrapper>
    </Container>
  );
};
