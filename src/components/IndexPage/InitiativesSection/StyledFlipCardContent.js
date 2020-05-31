import styled from 'styled-components';
import { StyledFlipCard } from './StyledFlipCard';

export const StyledFlipCardContent = styled.div`
  -webkit-transition: -webkit-transform 0.6s ease-in-out;
  transition: -webkit-transform 0.6s ease-in-out;
  -o-transition: transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  position: relative;

  @media only screen and (hover: none) and (pointer: coarse) {
    position: static;
  }

  @media only screen and (hover: none) and (pointer: coarse) {
    ${StyledFlipCard}:hover & {
      display: block;
    }
  }

  ${StyledFlipCard}:hover & {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }

  @media only screen and (hover: none) and (pointer: coarse) {
    ${StyledFlipCard}:hover & {
      -webkit-transform: rotateY(0deg);
      transform: rotateY(0deg);
    }
  }
`;
