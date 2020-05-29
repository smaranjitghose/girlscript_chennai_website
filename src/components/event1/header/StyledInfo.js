import styled from 'styled-components';

export const StyledInfo = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #f47621;
  padding-top: 100px;
  letter-spacing: 1px;
  -webkit-transition: 0.6s;
  -o-transition: 0.6s;
  transition: 0.6s;

  > a {
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
    &:hover {
      color: var(--font-color);
      text-shadow: 5px 5px 7px var(--shadow-clr);
    }
  }
`;
