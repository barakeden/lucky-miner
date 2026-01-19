import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.md};
  padding: 0;
  flex-wrap: wrap;
`;

export const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.semibold};
  border-radius: ${theme.borderRadius.md};
  transition: all ${theme.transitions.normal};
  min-width: 160px;
  justify-content: center;
  box-shadow: 0 4px 12px ${theme.colors.shadow};

  ${props => props.$variant === 'primary' ? `
    background: linear-gradient(135deg, ${theme.colors.gold} 0%, ${theme.colors.goldDark} 100%);
    color: ${theme.colors.background};
    
    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px ${theme.colors.shadow}, 0 0 20px rgba(255, 215, 0, 0.4);
    }
    
    &:active:not(:disabled) {
      transform: translateY(0);
    }
  ` : `
    background: ${theme.colors.backgroundLight};
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.border};
    
    &:hover:not(:disabled) {
      border-color: ${theme.colors.textMuted};
      transform: translateY(-2px);
    }
    
    &:active:not(:disabled) {
      transform: translateY(0);
    }
  `}

  &:disabled {
    opacity: 0.5;
    transform: none;
  }

  @media (max-width: 600px) {
    min-width: 140px;
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    font-size: ${theme.fontSize.md};
  }
`;