import styled from "styled-components";
import { theme } from "../../styles/theme";

export const CardContainer = styled.div`
  perspective: 1000px;
  width: 100%;
  aspect-ratio: 1;
`;

export const CardInner = styled.div<{ $isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${props => props.$isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: ${theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px ${theme.colors.shadow};
`;

export const CardBack = styled(CardFace) <{ $disabled: boolean }>`
  background: linear-gradient(135deg, ${theme.colors.cardBack} 0%, ${theme.colors.cardFront} 100%);
  border: 2px solid ${theme.colors.border};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  transition: all ${theme.transitions.normal};

  &:hover {
    transform: ${props => props.$disabled ? 'none' : 'scale(1.05)'};
    border-color: ${props => props.$disabled ? theme.colors.border : theme.colors.gold};
    box-shadow: ${props => props.$disabled ? 'none' : `0 6px 20px ${theme.colors.shadow}, 0 0 20px rgba(255, 215, 0, 0.3)`};
  }

  &::before {
    content: '?';
    font-size: ${theme.fontSize.xxxl};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.colors.gold};
    opacity: 0.5;
  }
`;

export const CardFront = styled(CardFace) <{ $isWinning: boolean }>`
  background: ${props => props.$isWinning
    ? `linear-gradient(135deg, ${theme.colors.win} 0%, ${theme.colors.winDark} 100%)`
    : `linear-gradient(135deg, ${theme.colors.lose} 0%, ${theme.colors.loseDark} 100%)`
  };
  transform: rotateY(180deg);
  border: 2px solid ${props => props.$isWinning ? theme.colors.winDark : theme.colors.loseDark};
  animation: revealPulse 0.5s ease;

  @keyframes revealPulse {
    0%, 100% { transform: rotateY(180deg) scale(1); }
    50% { transform: rotateY(180deg) scale(1.1); }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
`;