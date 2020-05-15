import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-top: 3%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  h6 {
    font-family: 'Comfortaa', sans-serif;
    margin-top: 2%;
    color: #c4c4c4;
  }
`;

const StyledIcon = styled.a`
  margin-right: 25px;
  font-size: 26px;
  text-decoration: none;
  color: #fd751ba6;

  &:hover {
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
    color: ${(props) => props.hoverColor || '#00acee'};
  }
`;

export default function SocialLinks() {
  return (
    <center>
      <StyledDiv>
        <StyledIcon
          className="fa fa-twitter"
          href="https://twitter.com/girlscriptch"
          hoverColor="#00acee"
        ></StyledIcon>
        <StyledIcon
          className="fa fa-instagram"
          href="https://www.instagram.com/girlscriptchennai/"
          hoverColor="#fb39a4"
        ></StyledIcon>
        <StyledIcon
          className="fa fa-github"
          href="https://github.com/girlscriptchennai"
          hoverColor="#4c3372"
        ></StyledIcon>
        <StyledIcon
          className="fa fa-linkedin"
          href="https://www.linkedin.com/company/girlscript-chennai/"
          hoverColor="#0e76a8"
        ></StyledIcon>
        <h6>Made with ♥</h6>
      </StyledDiv>
    </center>
  );
}
