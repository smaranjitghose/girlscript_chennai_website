import styled from 'styled-components';
import { StyledCard } from './StyledCard';

export const StyledText = styled.div`
  -ms-grid-row: 2;
  -ms-grid-column: 1;
  grid-area: text;
  grid-row: 2;
  grid-column: 1;
  grid-area: text;
  margin: 25px;

  > p {
    font-family: 'Quicksand', sans-serif;
    color: grey;
    font-size: 14.9px;

    ${StyledCard}:hover & {
      color: white;
    }
  }

  > h2 {
    margin-top: 30px;
    font-size: 28px;
    color: var(--font-color);

    ${StyledCard}:hover & {
      color: white;
    }
  }
`;
