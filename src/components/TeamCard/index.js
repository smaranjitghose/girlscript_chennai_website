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
