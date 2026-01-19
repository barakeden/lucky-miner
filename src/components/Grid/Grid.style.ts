import styled from "styled-components";
import { theme } from "../../styles/theme";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.md};
  width: 100%;
  max-width: min(500px, 50vh);
  margin: 0 auto;
  padding: 0;

  @media (max-width: 768px) {
    max-width: min(90vw, 50vh);
    gap: ${theme.spacing.sm};
  }
`;
