import styled from 'styled-components';

export const StyledCard = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 300px;
  grid-template-columns: 300px;
  -ms-grid-rows: 210px 210px 80px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: 'image' 'text' 'stats';
  border-radius: 18px;
  background: rgb(250, 250, 250);
  -webkit-box-shadow: 0 10px 25px rgba(240, 112, 0, 0.23),
    0 6px 0px rgba(240, 112, 0, 0.5);
  box-shadow: 0 10px 25px rgba(240, 112, 0, 0.23),
    0 6px 0px rgba(240, 112, 0, 0.5);
  text-align: center;
  overflow: hidden;
  position: relative;
  z-index: 0;
  -webkit-transition: 0.5s ease;
  -o-transition: 0.5s ease;
  transition: 0.5s ease;
  cursor: pointer;
  margin: 30px;

  &:hover {
    -webkit-transform: scale(1.15);
    -ms-transform: scale(1.15);
    transform: scale(1.15);
    -webkit-box-shadow: 0 10px 25px rgba(240, 112, 0, 0.23),
      0 6px 0px rgba(240, 112, 0, 0.5);
    box-shadow: 0 10px 25px rgba(240, 112, 0, 0.23),
      0 6px 0px rgba(240, 112, 0, 0.5);
  }
  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #f47621;
    height: 52px;
    width: 52px;
    border-radius: 32px;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transition: -webkit-transform 0.25s ease-out;
    transition: -webkit-transform 0.25s ease-out;
    -o-transition: transform 0.25s ease-out;
    transition: transform 0.25s ease-out;
    transition: transform 0.25s ease-out, -webkit-transform 0.25s ease-out;
  }

  &:hover:before {
    -webkit-transform: scale(22);
    -ms-transform: scale(22);
    transform: scale(22);
  }
`;
