import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ScoreBoardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.xl};
  padding: ${theme.spacing.md};
  background: ${theme.colors.backgroundLight};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: 0 4px 20px ${theme.colors.shadow};
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: ${theme.spacing.md};
    padding: ${theme.spacing.sm};
  }
`;

export const ScoreItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sm};
  min-width: 150px;

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
  font-weight: ${theme.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const ScoreValue = styled.div<{ $highlight?: boolean }>`
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.bold};
  color: ${props => props.$highlight ? theme.colors.gold : theme.colors.text};
  text-shadow: ${props => props.$highlight ? `0 0 10px ${theme.colors.gold}` : 'none'};
  transition: all ${theme.transitions.normal};

  @media (max-width: 768px) {
    font-size: ${theme.fontSize.lg};
  }
`;