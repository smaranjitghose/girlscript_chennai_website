import { HeroContainer } from './HeroContainer';
import HeroContent from './HeroContent';
import { HeroImage } from './HeroImage';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent></HeroContent>
      <HeroImage></HeroImage>
    </HeroContainer>
  );
};

export default HeroSection;
