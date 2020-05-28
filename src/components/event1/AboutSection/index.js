import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 35px;
`;

const EventAboutSection = () => {
  return (
    <>
      <StyledDiv />
      <div className="about-box">
        <div className="animation-box">
          <div className="container-fluid">
            <div className="container-heading" id="container-heading">
              <span>A</span>bout
            </div>
            <div className="row">
              <div className="col-xl-7 col-lg-12 col-sm-12 mt-4 text-container">
                <p className="mt-2 mb-3 para" id="para">
                  If you want to start as a beginner, you can join as a &apos;
                  Group Member&apos; or if you want to mentor others in
                  improving their skills, you can apply as a &apos;Group
                  Moderator&apos;.
                  <br />
                  <br />
                  Upon successful completion, top groups in the leader board
                  with maximum progress will win swags, recommendations,
                  internships and incredible like-minded friends for lifetime!
                  Any form of violence or abuse or in-activeness will result
                  into elimination from the program. Once the applications are
                  closed, more details will be emailed to you. There is no
                  eligibility criteria for this program, anyone from any part of
                  the world can apply.If you want to start as a beginner, you
                  can join as a &apos;Group Member&apos; or if you want to
                  mentor others in improving their skills, you can apply as a
                  &apos;Group Moderator&apos;.
                  <br />
                  <br />
                  form of violence or abuse or in-activeness will result into
                  elimination from the program. Once the applications are
                  closed, more details will be emailed to you.
                </p>
              </div>
              <div className="col-xl-5 col-lg-12 col-sm-12 text-center">
                <img
                  src="assets/images/event/event6.jpg"
                  className="mt-5 ml-2 mb-4"
                  alt="Image of event"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventAboutSection;
