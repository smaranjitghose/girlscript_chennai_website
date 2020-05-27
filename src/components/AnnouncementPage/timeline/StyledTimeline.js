import styled from 'styled-components';

export const StyledTimeline = styled.div`
  padding-top: 5px;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #ff9f55;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    border-radius: 300px;
  }
`;
