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
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 20rem;
  height: 20rem;
  position: relative;
  overflow: hidden;
  margin: 1rem;
`;

const Name = styled.div`
  font-size: 1.6rem;
  font-family: 'Comfortaa', sans-serif;
  text-align: center;
  color: #ef6f00;
  > span {
    color: #000;
    font-size: 1.2rem;
  }
`;

const Socials = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  z-index: 3;
  display: flex;
  height: 10vh;
  > li a {
    display: block;
    width: 3rem;
    height: 3rem;
    background: #fff;
    text-align: center;
    font-size: 20px;
    color: #333;
    font-weight: bold;
    margin: 0 6px;
    line-height: 3rem;
    border-radius: 50%;
    transition: 0.4s;
    transform: translateY(200px);
    opacity: 0;

    > .fa {
      font-size: 1.5rem;
      line-height: 3rem;
    }
  }
`;

const CardImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 20rem;
  height: 20rem;
  > img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
`;

const Details = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background: var(--details-color);
  width: 100%;
  padding: 1rem;
  opacity: 0;
  transform: translateY(2rem);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const Card = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;

  &:hover ${Details} {
    transform: translateY(0);
    opacity: 1;
    transition: 0.5s;
    z-index: 2;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  &:hover ${Socials} {
    > li a {
      transform: translateY(0px);
      opacity: 1;
    }
    > li:nth-child(1) a {
      transition-delay: 0.1s;
    }
    > li:nth-child(2) a {
      transition-delay: 0.2s;
    }
    > li:nth-child(3) a {
      transition-delay: 0.4s;
    }
  }
`;

const favClassesDataSet = {
  linkedIn: 'fa fa-linkedin',
  twitter: 'fa fa-twitter',
  github: 'fa fa-github',
  facebook: 'fa fa-facebook',
};

const mapProfileLinksToFavClasses = (profileName) => {
  return favClassesDataSet[profileName];
};

const generateProfileLinks = (profileObject) => {
  let result = [];
  for (let profile in profileObject) {
    const classtoAdd = mapProfileLinksToFavClasses(profile);
    const listItem = `<li>
							<a href="${profileObject[profile]}" target="__blank">
								<i class="${classtoAdd}"></i>
							</a>
						</li>`;
    result.push(listItem);
  }
  return result.join(' ');
};

const TeamCard = ({ detail }) => {
  const { name, position, image, profiles } = detail;
  const getProfilesLinksDynamic = generateProfileLinks(profiles[0]);

  return (
    <CardWrapper>
      <Card>
        <CardImage>
          <img
            src={`/assets/images/team/${image}`}
            alt={`${name}`}
            aria-label={`${name}`}
          />
        </CardImage>
        <Socials
          dangerouslySetInnerHTML={{ __html: `${getProfilesLinksDynamic}` }}
        ></Socials>
        <Details>
          <Name>
            {name} <br /> <span>{position}</span>
          </Name>
        </Details>
      </Card>
    </CardWrapper>
  );
};

export default TeamCard;
