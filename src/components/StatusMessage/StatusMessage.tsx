import { memo } from 'react';
import { Trophy, Skull, DollarSign, Loader2 } from 'lucide-react';
import type { StatusMessageProps } from '../../types/game';
import { MessageContainer, MessageContent, SpinningIcon } from './StatusMessage.style';

export const StatusMessage = memo<StatusMessageProps>(({ status, currentScore }) => {
  return (
    <MessageContainer>
      {status === 'loading' && (
        <MessageContent $variant="loading">
          <SpinningIcon>
            <Loader2 size={24} />
          </SpinningIcon>
          Loading new game...
        </MessageContent>
      )}
      {status === 'won' && (
        <MessageContent $variant="success">
          <Trophy size={24} />
          Congratulations! You won all safe tiles!
        </MessageContent>
      )}
      {status === 'lost' && (
        <MessageContent $variant="danger">
          <Skull size={24} />
          Boom! You hit a mine. Score: 0 coins
        </MessageContent>
      )}
      {status === 'cashed_out' && (
        <MessageContent $variant="success">
          <DollarSign size={24} />
          Successfully cashed out {currentScore} coins!
        </MessageContent>
      )}
    </MessageContainer>
  );
});

StatusMessage.displayName = 'StatusMessage';
