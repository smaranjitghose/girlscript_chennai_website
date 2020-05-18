import { useState, useEffect } from 'react';
import TeamCard from '../../components/TeamCard';
import styled from 'styled-components';

const TeamGrid = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  min-height: 90vh;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const TeamPageDisplay = () => {
  const [teamDetails, setDetails] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      const res = await fetch('/teamData.json');
      const data = await res.json();
      setDetails(data);
    };

    getDetails();
  }, []);

  return (
    <TeamGrid>
      {teamDetails.map((detail, index) => (
        <TeamCard key={index} detail={detail} />
      ))}
    </TeamGrid>
  );
};

export default TeamPageDisplay;
