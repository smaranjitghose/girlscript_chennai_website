import styled from 'styled-components';

export const StyledColorOverlay = styled.div`

    position: absolute;
    background-color: var(--bg1-color);
    opacity: 0;
    height: 100%;
    width: 100%;
  }
  
  @media screen and (max-width: 1048px) {
      opacity: 0.8;
    }
`;
