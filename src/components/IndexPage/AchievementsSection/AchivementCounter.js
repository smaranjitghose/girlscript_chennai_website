import styled from 'styled-components';

const CounterContainer = styled.div`
  margin-bottom: 30px;
  position: relative;
`;

const CounterCount = styled.div`
  font-family: 'Quicksand', sans-serif;
  font-size: 46px;
  color: #111111;
  font-weight: 700;
  line-height: 50px;
  position: absolute;
  left: 0;
  top: 0;
`;

const CounterText = styled.div`
  padding-left: 150px;

  h4 {
    font-family: 'Comfortaa', sans-serif;
    font-size: 22px;
    color: #111111;
    font-weight: 700;
    margin-bottom: 12px;
  }

  p {
    font-family: 'Quicksand', sans-serif;
    letter-spacing: 0.5px;
    color: #111111;
  }
`;

const AchievementCounter = ({ count, title, text }) => {
  return (
    <CounterContainer>
      <CounterCount>{count}+</CounterCount>
      <CounterText>
        <h4>{title}</h4>
        <p>{text}</p>
      </CounterText>
    </CounterContainer>
  );
};

export default AchievementCounter;
