import Confetti from 'react-confetti';
import { Grid } from '../Grid/Grid';
import { ScoreBoard } from '../ScoreBoard/ScoreBoard';
import { Controls } from '../Controls/Controls';
import { StatusMessage } from '../StatusMessage/StatusMessage';
import { useWindowSize, useGameLogic } from '../../hooks';
import { Container, GameWrapper, Title } from './GameContainer.style';

export const GameContainer: React.FC = () => {
  const windowSize = useWindowSize();
  const {
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
  } = useGameLogic();

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

  return (
    <Container>
      {isWinner && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={status === 'won' ? 800 : 500}
          gravity={0.15}
          colors={['#FFD700', '#2ecc71', '#ffffff', '#f1c40f']}
        />
      )}
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