import { useState } from 'react';
import { Gem, Bomb } from 'lucide-react'; 
import { CardContainer, CardInner, CardBack, CardFront, IconWrapper } from './Card.style';
import type { CardProps } from '../../types/game';  
  
export const Card: React.FC<CardProps> = ({ isRevealed, isWinning, onFlip, disabled }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (disabled || isRevealed || isAnimating) return;

    setIsAnimating(true);
    onFlip();

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  return (
    <CardContainer>
      <CardInner $isFlipped={isRevealed}>
        <CardBack
          $disabled={disabled || isRevealed}
          onClick={handleClick}
        />
        <CardFront $isWinning={isWinning}>
          <IconWrapper>
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
