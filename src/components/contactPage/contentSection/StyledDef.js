import styled from 'styled-components';

export const StyledDef = styled.div`

  padding: 1rem;
  
  > h4 {
  font-family: 'Comfortaa', sans-serif;
  color: #f47621;
  font-size: 1.5rem;
  font-weight: bold;
}

   > i {
  font-size: 27px;
  padding-right: 5px;
  color: #fff;
}

   > div{
    padding: 0.2rem;
   }

@media only screen and (max-width: 994px) {
    padding: 1rem 0;
}

@media only screen and (max-width: 760px){
  margin:0 auto;
  }
@media only screen and (max-width: 450px) {
   > h4 {
    font-size: 21px;
  }

`;
