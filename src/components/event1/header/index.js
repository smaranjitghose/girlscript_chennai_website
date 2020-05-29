import Link from 'next/link';
import { StyledHeader } from './StyledHeader';
import { StyledColorOverlay } from './StyledColorOverlay';
import { StyledHeading } from './StyledHeading';
import { StyledCaption } from './StyledCaption';
import { StyledInfo } from './StyledInfo';

const EventHeader = () => {
  return (
    <StyledHeader>
      <StyledColorOverlay />
      <div className="container">
        <div className="row d-block">
          <div className="col-lg-6">
            <StyledHeading>
              Code <span id="heading-plus">Camp</span>
            </StyledHeading>
            <br />
            <StyledCaption>It is Time to Code</StyledCaption>
            <StyledCaption>
              <span className="caption-2"> Presented by </span>
              <span className="font-change"> Game Foundation</span>
            </StyledCaption>
          </div>
          <StyledInfo>
            <div className="col">
              <Link href="/scheduled">Get Scheduled</Link>
            </div>
          </StyledInfo>
        </div>
      </div>
    </StyledHeader>
  );
};

export default EventHeader;
