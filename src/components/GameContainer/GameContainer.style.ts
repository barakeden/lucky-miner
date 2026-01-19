import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.md};
  overflow: hidden;
`;

export const GameWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} 0;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: ${theme.fontSize.xxxl};
  font-weight: ${theme.fontWeight.bold};
  margin: 0;
  background: linear-gradient(135deg, ${theme.colors.gold} 40%, ${theme.colors.win} 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 8px ${theme.colors.shadow};

  @media (max-width: 768px) {
    font-size: ${theme.fontSize.xl};
  }
`;
