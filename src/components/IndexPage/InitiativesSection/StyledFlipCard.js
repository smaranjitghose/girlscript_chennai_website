import styled from 'styled-components';

export const StyledFlipCard = styled.div`
  width: 13rem;
  height: 13rem;
  -webkit-perspective: 62.5rem;
  perspective: 62.5rem;
  cursor: pointer;
  background-color: var(--bg2-color);

  @media only screen and (hover: none) and (pointer: coarse) {
    -webkit-perspective: 0;
    perspective: 0;
  }

  @media only screen and (max-width: 1014px) {
    margin: 1rem 0rem;
  }

  @media only screen and (max-width: 1017px) and (hover: none) and (pointer: coarse) {
    margin-bottom: 16rem;
  }
`;
