import { StyledDef } from './StyledDef';
import { StyledDefSec } from './StyledDefSec';
import { StyledSec } from './StyledSec';

const ContentSection = () => {
  return (
    <StyledSec>
      <StyledDef>
        <h4>Get in Touch</h4>
        <StyledDefSec>
          Have a doubt in mind? <br />
          Want to share something with us?
        </StyledDefSec>
      </StyledDef>
      <StyledDef>
        <h4>
          <i className="fa fa-map-marker"></i> Find us at the office
        </h4>
        <StyledDefSec>Chennai,India</StyledDefSec>
      </StyledDef>
      <StyledDef>
        <h4>
          <i className="fa fa-phone"></i> Give us a ring
        </h4>
        <StyledDefSec>INDIA +91 762321762</StyledDefSec>
      </StyledDef>
    </StyledSec>
  );
};

export default ContentSection;
