import { useState, useEffect } from 'react';
import { Coins, TrendingUp } from 'lucide-react';
import { ScoreBoardContainer, ScoreItem, ScoreLabel, ScoreValue } from './ScoreBoard.style';
import type { ScoreBoardProps } from '../../types/game';

const AnimatedNumber: React.FC<{ value: number }> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 600;
    const startValue = displayValue;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + (value - startValue) * easeOut);
      
      setDisplayValue(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value]);

  return <>{displayValue.toLocaleString()}</>;
};

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
        <ScoreValue $highlight={currentScore > 0}>
          <AnimatedNumber value={currentScore} /> coins
        </ScoreValue>
      </ScoreItem>
    </ScoreBoardContainer>
  );
};