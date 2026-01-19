import styled, { keyframes, css } from "styled-components";
import { theme } from "../../styles/theme";

const pulseGlow = keyframes`
  0% { 
    transform: scale(1);
    filter: brightness(1);
    text-shadow: 0 0 5px ${theme.colors.gold}44;
  }
  50% { 
    transform: scale(1.05);
    filter: brightness(1.3);
    text-shadow: 0 0 15px ${theme.colors.gold};
  }
  100% { 
    transform: scale(1);
    filter: brightness(1);
    text-shadow: 0 0 5px ${theme.colors.gold}44;
  }
`;

export const ScoreBoardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.xl};
  padding: ${theme.spacing.lg};
  background: ${theme.colors.backgroundLight};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: 0 8px 32px ${theme.colors.shadow};
  border: 1px solid rgba(255, 255, 255, 0.05);
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    gap: ${theme.spacing.md};
    padding: ${theme.spacing.sm};
  }
`;

export const ScoreItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.xs};
  min-width: 150px;
  padding: ${theme.spacing.sm};
  background: rgba(255, 255, 255, 0.03);
  border-radius: ${theme.borderRadius.md};

  @media (max-width: 600px) {
    min-width: 120px;
  }
`;

export const ScoreLabel = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.textMuted};
  font-weight: ${theme.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  opacity: 0.8;
`;

export const ScoreValue = styled.div<{ $highlight?: boolean }>`
  font-size: ${theme.fontSize.xxl};
  font-weight: ${theme.fontWeight.bold};
  font-variant-numeric: tabular-nums;
  color: ${props => props.$highlight ? theme.colors.gold : theme.colors.text};
  transition: all ${theme.transitions.normal};
  display: flex;
  align-items: center;
  gap: 4px;

  ${props => props.$highlight && css`
    animation: ${pulseGlow} 2s infinite ease-in-out;
    color: #2ecc71;
    text-shadow: 0 0 12px rgba(46, 204, 113, 0.5);
  `}

  @media (max-width: 768px) {
    font-size: ${theme.fontSize.xl};
  }
`;