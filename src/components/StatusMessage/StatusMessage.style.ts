import styled from "styled-components";
import { theme } from "../../styles/theme";

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: 0;
  margin: 0;
  min-height: 60px;
  justify-content: center;
`;

export const MessageContent = styled.div<{ $variant: 'success' | 'danger' | 'info' | 'loading' }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSize.md};
  font-weight: ${theme.fontWeight.semibold};
  box-shadow: 0 4px 20px ${theme.colors.shadow};
  animation: slideIn 0.5s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  ${props => {
    switch (props.$variant) {
      case 'success':
        return `
          background: linear-gradient(135deg, ${theme.colors.win} 0%, ${theme.colors.winDark} 100%);
          color: #ffffff;
        `;
      case 'danger':
        return `
          background: linear-gradient(135deg, ${theme.colors.lose} 0%, ${theme.colors.loseDark} 100%);
          color: #ffffff;
        `;
      case 'loading':
        return `
          background: ${theme.colors.backgroundLight};
          color: ${theme.colors.text};
          border: 2px solid ${theme.colors.border};
        `;
      default:
        return `
          background: ${theme.colors.backgroundLight};
          color: ${theme.colors.text};
          border: 2px solid ${theme.colors.border};
        `;
    }
  }}

  @media (max-width: 768px) {
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-size: ${theme.fontSize.sm};
  }
`;

export const SpinningIcon = styled.div`
  animation: spin 1s linear infinite;
  display: flex;
  align-items: center;

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
