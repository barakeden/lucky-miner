import { Coins, TrendingUp } from 'lucide-react';
import { ScoreBoardContainer, ScoreItem, ScoreLabel, ScoreValue } from './ScoreBoard.style';
import type { ScoreBoardProps } from '../../types/game';

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ amountPerWin, currentScore }) => {
  return (
    <ScoreBoardContainer>
      <ScoreItem>
        <ScoreLabel>
          <TrendingUp size={16} />
          Win Amount
        </ScoreLabel>
        <ScoreValue>{amountPerWin} coins</ScoreValue>
      </ScoreItem>

      <ScoreItem>
        <ScoreLabel>
          <Coins size={16} />
          Current Score
        </ScoreLabel>
        <ScoreValue $highlight={currentScore > 0}>{currentScore} coins</ScoreValue>
      </ScoreItem>
    </ScoreBoardContainer>
  );
};
