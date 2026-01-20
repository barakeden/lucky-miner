import { useState, useEffect, useRef } from 'react';
import { Gem, Bomb } from 'lucide-react';
import { CardContainer, CardInner, CardBack, CardFront, IconWrapper } from './Card.style';
import type { CardProps } from '../../types/game';

export const Card: React.FC<CardProps> = ({ isRevealed, isWinning, onFlip, disabled }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    if (disabled || isRevealed || isAnimating) return;

    setIsAnimating(true);
    onFlip();

    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
      timeoutRef.current = null;
    }, 600);
  };

  return (
    <CardContainer>
      <CardInner $isFlipped={isRevealed}>
        <CardBack
          $disabled={disabled || isRevealed}
          onClick={handleClick}
        />
        <CardFront $isWinning={isWinning} $isVisible={isRevealed}>
          <IconWrapper $isRevealed={isRevealed} $isWinning={isWinning}>
            {isWinning ? (
              <Gem size={48} color="#ffffff" strokeWidth={2.5} />
            ) : (
              <Bomb size={48} color="#ffffff" strokeWidth={2.5} />
            )}
          </IconWrapper>
        </CardFront>
      </CardInner>
    </CardContainer>
  );
};
