import styled from 'styled-components';

const CounterText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  margin: 0 0 15px 0;
  color: black;
  text-align: center;
  font-family: 'Comfortaa', sans-serif;
`;

const CounterNumber = styled.h2`
  font-weight: bold;
  font-size: 42px;
  color: #f47621;
  text-align: center;
  font-family: 'Comfortaa', sans-serif;
  padding: 1rem 0;
`;

const FavIconComponent = ({ favClass }) => {
  return <i className={favClass}></i>;
};

const MainCountBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CountDownCard = ({ detail }) => {
  const { text, countFrom, iconClasses } = detail;

  return (
    <div className="col-md-4 col-sm-4">
      <MainCountBox>
        <FavIconComponent favClass={`${iconClasses}`} />
        <CounterNumber>
          <span className="counter">{countFrom}</span>
        </CounterNumber>
        <CounterText>{text}</CounterText>
      </MainCountBox>
    </div>
  );
};

export default CountDownCard;
