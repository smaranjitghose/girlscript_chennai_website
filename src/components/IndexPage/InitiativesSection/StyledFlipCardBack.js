import styled from 'styled-components';

export const StyledFlipCardBack = styled.div`
  width: 13rem;
  height: 13rem;
  padding: 0.5rem 1rem;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: var(--theme-color);
  color: var(--bg1-color);
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);

  @media only screen and (hover: none) and (pointer: coarse) {
    position: static;
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
`;
