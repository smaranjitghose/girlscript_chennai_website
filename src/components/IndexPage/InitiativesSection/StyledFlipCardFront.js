import styled from 'styled-components';

export const StyledFlipCardFront = styled.div`
width: 13rem;
height: 13rem;
padding: 0.5rem;
position: absolute;
top: 0;
left: 0;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
-webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);


@media only screen and (hover: none) and (pointer: coarse) {
  position: static;
  
`;
