import styled from 'styled-components';

const TeamProfile = styled.div`
  padding: 20px 50px 20px 20px;
  border-radius: 10px;
  position: relative;
  -webkit-transition: all 0.35s cubic-bezier(0.14, 0.51, 0, 1);
  -o-transition: all 0.35s cubic-bezier(0.14, 0.51, 0, 1);
  transition: all 0.35s cubic-bezier(0.14, 0.51, 0, 1);
  cursor: pointer;
  &:hover {
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
    -webkit-transition: all 0.2s ease-out;
    -o-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
  }
`;

const TeamProfilePicture = styled.div`
  height: 100px;
  overflow: visible;
  background-position: center;
  position: relative;
  > img {
    width: 170px;
    height: 170px;
    border-radius: 10px;
    position: absolute;
    top: -70px;
    left: -30px;
    box-shadow: 8px 12px 20px -10px rgb(183, 183, 183);
  }
`;

const TeamProfileInfo = styled.div`
  margin-top: 35px;
  margin-bottom: 15px;
`;

const FullName = styled.div`
  font-size: 1.7rem;
  line-height: 38px;
  margin-bottom: 10px;
  color: #ef6f00;
  font-weight: bold;
  font-family: 'Comfortaa', sans-serif;
`;

const Position = styled.div`
  font-family: 'Comfortaa', sans-serif;
  font-size: 1rem;
`;

const TeamCard = ({ image, name, position, github, linkedIn, cssClass }) => {
  return (
    <TeamProfile className="gs-team--board">
      <TeamProfilePicture>
        <img
          src="/assets/images/team/smaranjit_ghose.jpg"
          alt="smaranjit_ghose"
          aria-label="smaranjit_ghose"
        />
      </TeamProfilePicture>
      <TeamProfileInfo>
        <FullName>Smaranjit Ghose</FullName>
        <Position>The Board</Position>
      </TeamProfileInfo>
      <div className="gs-team-member-social">
        <a href="#!" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="#!" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </TeamProfile>
  );
};

export default TeamCard;
