import styled from 'styled-components';

export const StyledButton = styled.button`
  margin: 0;
  padding: 0;
  background: #f47621;
  font-weight: bold;
  -webkit-transition: 0.6s;
  -o-transition: 0.6s;
  transition: 0.6s;
  border-radius: 5px;
  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 3px 14px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.2px;
  font-family: 'Comfortaa';

  > a {
    color: white;
  }

  &:hover {
    box-shadow: 0 5px 10px #ff9a0e;
    -webkit-box-shadow: 0 5px 10px #ff9a0e;
  }

  @media only screen and (max-width: 340px) {
    padding-top: 10px;
  }
`;
