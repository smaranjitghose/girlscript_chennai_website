import styled from 'styled-components';

export const StyledButton = styled.div`

  margin: 4em 0 0 10px;
  z-index: 1;
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 700;
  position: relative;
  text-align: center;
  width: 120px;
  background-color: #f47621 !important;
  font-family: 'Comfortaa', sans-serif;
  padding: 10px 10px;
  display: block;
  color: #fff;
  -webkit-transition: 0.6s;
  -o-transition: 0.6s;
  transition: 0.6s;
  border-radius: 5px;
  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 3px 14px rgba(0, 0, 0, 0.2);
  border: 1px solid transparent;
}

   &:hover {

  box-shadow: 0 5px 10px #ff9a0e;
  -webkit-box-shadow: 0 5px 10px #ff9a0e;
  color: none;
}

`;
