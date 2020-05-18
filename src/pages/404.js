import styled from 'styled-components';

const Custom404 = () => {
  const StyledContainer = styled.div`
 
    .container{
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    color: #000000;
    }
  }
    `;

  return (
    <StyledContainer>
      <div className="container">
        <h2>OOPS! Page not found</h2>
        <br />
        <h2>404</h2>
        <br />
        <p>
          The link you followed probably broken or the page has been removed.
        </p>
      </div>
    </StyledContainer>
  );
};

export default Custom404;
