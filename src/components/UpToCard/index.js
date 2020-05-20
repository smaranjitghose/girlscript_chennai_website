import styled from 'styled-components';

const CardImage = styled.img`
  border-radius: 5px;
  flex-shrink: 0;
  width: 100%;
`;

const CardBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
  display: block;

  > h5 {
    text-align: center;
    font-weight: bold;
    letter-spacing: normal;
    font-size: 22px;
    font-family: 'Quicksand', sans-serif;
    margin-bottom: 0.75rem;
    color: #f47621;
  }

  > p {
    letter-spacing: 1px;
    font-family: 'Comfortaa', sans-serif;
    text-align: justify;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    margin: 0 0 15px 0;
    color: #111111;
  }
  > a {
    display: block;
    text-align: right;
    opacity: 0.6;
    color: inherit;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;

    &:hover {
      color: white;
      opacity: 1;
    }
  }
`;

const CustomCard = styled.div`
  cursor: pointer;
  border: none;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(240, 112, 0, 0.23),
    0 6px 0px rgba(240, 112, 0, 0.5);
  padding: 1rem;
  margin-bottom: 3rem;

  background-clip: border-box;
  background-color: white;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background-color: #fff;
    height: 74px;
    width: 52px;
    border-radius: 32px;
    transition: transform 0.25s ease-out, -webkit-transform 0.25s ease-out;
  }

  &:hover:before {
    transform: scale(22);
    background-color: #f47621;
  }

  &:hover ${CardBody} {
    > h5 {
      color: white;
    }
    > p {
      color: white;
    }
    > a {
      color: white;
    }
  }
`;

const UpToCard = ({ detail, index }) => {
  const { coverImage, altName, cardTitle, description, referencePage } = detail;

  return (
    <div className="col-xl-4 col-lg-6 col-md-6">
      <CustomCard>
        <CardImage src={coverImage} alt={altName} />
        <CardBody>
          <h5>{cardTitle}</h5>
          <p className={`ct${index}`}>{description}</p>
          <a href={referencePage}>
            Read full story <i className="fa fa-arrow-right"></i>
          </a>
        </CardBody>
      </CustomCard>
    </div>
  );
};

export default UpToCard;
