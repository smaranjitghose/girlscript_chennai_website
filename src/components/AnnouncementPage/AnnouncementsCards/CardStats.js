import styled from 'styled-components';
import { StyledCard } from './StyledCard';

export const CardStats = styled.div`
  -ms-grid-row: 3;
  -ms-grid-column: 1;
  grid-area: stats;
  grid-area: stats;
  padding-top: 20px;
  margin-top: 8px;
  grid-row: 3;
  grid-column: 1;

  ${StyledCard}:hover & {
    background-color: #fff;
  }
`;
