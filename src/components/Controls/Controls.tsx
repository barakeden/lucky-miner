import { memo } from 'react';
import { DollarSign, RotateCcw } from 'lucide-react';
import { ControlsContainer, Button } from './Controls.style';
import type { ControlsProps } from '../../types/game';

export const Controls = memo<ControlsProps>(({ onCashOut, onRestart, status, canCashOut }) => {
  const showCashOut = status === 'playing';
  const showRestart = ['lost', 'cashed_out', 'won'].includes(status);

  return (
    <ControlsContainer>
      {showCashOut && (
        <Button
          $variant="primary"
          onClick={onCashOut}
          disabled={!canCashOut}
        >
          <DollarSign size={20} />
          Cash Out
        </Button>
      )}

      {showRestart && (
        <Button
          $variant="secondary"
          onClick={onRestart}
        >
          <RotateCcw size={20} />
          Play Again
        </Button>
      )}
    </ControlsContainer>
  );
});

Controls.displayName = 'Controls';