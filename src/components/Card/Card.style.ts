import styled, { keyframes, css } from "styled-components";
import { theme } from "../../styles/theme";

const popIn = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  70% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
`;

const shake = keyframes`
  0%, 100% { transform: rotateY(180deg) translateX(0); }
  20%, 60% { transform: rotateY(180deg) translateX(-6px); }
  40%, 80% { transform: rotateY(180deg) translateX(6px); }
`;

const winGlow = keyframes`
  0%, 100% { box-shadow: 0 0 15px rgba(46, 204, 113, 0.4), inset 0 0 10px rgba(46, 204, 113, 0.2); }
  50% { box-shadow: 0 0 30px rgba(46, 204, 113, 0.8), inset 0 0 20px rgba(46, 204, 113, 0.4); }
`;

export const CardContainer = styled.div`
  perspective: 1000px;
  width: 100%;
  aspect-ratio: 1;
`;

export const CardInner = styled.div<{ $isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-style: preserve-3d;
  transform: ${props => props.$isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: ${theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardBack = styled(CardFace) <{ $disabled: boolean }>`
  background: linear-gradient(135deg, ${theme.colors.cardBack} 0%, ${theme.colors.cardFront} 100%);
  border: 2px solid ${theme.colors.border};
  cursor: ${props => props.$disabled ? 'default' : 'pointer'};
  z-index: 2;

  &:hover {
    ${props => !props.$disabled && css`
      box-shadow: 0 0 15px rgba(255, 215, 0, 0.4);
    `}
  }
`;

export const CardFront = styled(CardFace) <{ $isWinning: boolean, $isVisible: boolean }>`
  background: ${props => props.$isWinning
    ? `linear-gradient(135deg, #1e4d2b 0%, #2ecc71 100%)`
    : `linear-gradient(135deg, #4d1e1e 0%, #e74c3c 100%)`
  };
  transform: rotateY(180deg);
  border: 3px solid ${props => props.$isWinning ? '#2ecc71' : '#e74c3c'};
  
  ${props => props.$isVisible && (props.$isWinning
    ? css`animation: ${winGlow} 1.5s infinite ease-in-out 1s;`
    : css`animation: ${shake} 0.5s cubic-bezier(.36,.07,.19,.97) 0.6s both;`
  )}
`;

export const IconWrapper = styled.div<{ $isRevealed: boolean; $isWinning: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.5));
  opacity: 0; 

  ${props => props.$isRevealed && (
    props.$isWinning
      ? css`animation: ${popIn} 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s both;`
      : css`animation: ${keyframes`to { opacity: 1; }`} 0.2s 0.2s both;`
  )}
`;