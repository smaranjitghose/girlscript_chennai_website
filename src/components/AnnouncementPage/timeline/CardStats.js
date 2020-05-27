import styled from 'styled-components';

export const CardStats = styled.div`
  text-align: center;
  margin-bottom: 5px;
  -ms-grid-row: 3;
  -ms-grid-column: 1;
  grid-area: stats;
  grid-area: stats;
  padding-top: 20px;
  margin-top: 8px;
  grid-row: 3;
  grid-column: 1;

  > a {
    -webkit-transform: scale(0.85);
    -ms-transform: scale(0.85);
    transform: scale(0.85);

    @media only screen and (max-width: 991px) {
      -webkit-transform: scale(0.85);
      -ms-transform: scale(0.85);
      transform: scale(0.85);
    }
  }
`;
