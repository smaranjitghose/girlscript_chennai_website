import TeamCard from '../../components/TeamCard';
import styled from 'styled-components';

const TeamGrid = styled.div`
  width: 100%;
  margin: 0;
  margin-top: 50px;
  > div {
    padding: 0 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    justify-content: center;
    align-items: stretch;
    grid-gap: 110px 6%;
  }
`;

const TeamPageDisplay = () => {
  return (
    <div className="row">
      <TeamGrid>
        <div>
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </TeamGrid>
    </div>
  );
};

export default TeamPageDisplay;
