import styled from 'styled-components';

export const StyledImage = styled.div`
  -ms-grid-row: 1;
  -ms-grid-column: 1;
  grid-area: image;
  grid-row: 1;
  grid-column: 1;
  grid-area: image;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  > img {
    height: 250px;
    width: 270px;
    border-radius: 10px;
    margin-top: 10px;

    @media only screen and (max-width: 340px) {
      margin-right: 2.5rem;
      margin-top: 5px;
      height: 240px;
      width: 250px;
    }
  }
`;
