import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  position: relative;
  margin: 0 auto;
  display: block;
  padding: 10px 40px;
  font-size: 16px;
  color: #fff;
  font-weight: 700;
  background: #f47621;
  width: 200px;
  font-family: 'Comfortaa', sans-serif;
  border-radius: 10px;
  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 3px 14px rgba(0, 0, 0, 0.2);
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition: 0.6s;
  -o-transition: 0.6s;
  transition: 0.6s;

  &:hover {
    box-shadow: 0 5px 10px #ff9a0e;
    -webkit-box-shadow: 0 5px 10px #ff9a0e;
    color: none;
  }
`;
