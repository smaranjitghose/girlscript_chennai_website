import styled from 'styled-components';

const TeamHeading = styled.h1`
  margin-bottom: 5px;
  width: 100%;
  text-align: center;
  font-family: 'Comfortaa', sans-serif;
  font-size: 50px;
  font-weight: 400;
  color: #000;
  user-select: none;
  text-align: center;
  > span {
    color: #f47621;
  }
`;

const TeamDescription = styled.div`
  margin: 0 auto;
  color: #000;

  hr {
    border-top: 1px solid rgb(0, 0, 0);
  }
`;

const MainText = styled.h4`
  color: #616161;
  font-size: 1.25rem;
  font-weight: 200;
  padding-bottom: 6rem;
  line-height: 1.618;
  text-align: center;
  max-width: 500px;
`;

const TeamPageText = () => {
  return (
    <div className="row">
      <TeamHeading>
        Our <span className="team-part">Team</span>
      </TeamHeading>
      <TeamDescription>
        <hr />
        <MainText>
          We &apos; ve got a strong team filled with caffeine addicted
          developers, gradient loving designers and machine like working
          managers.
        </MainText>
      </TeamDescription>
    </div>
  );
};

export default TeamPageText;
