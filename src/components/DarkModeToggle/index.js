import styled from 'styled-components';

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin-top: 0.5%;
`;

const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const StyledSlider = styled.span`
  & {
    position: absolute;
    cursor: pointer;
    top: 1px;
    left: 2px;
    right: 0;
    bottom: 0;
    background-color: #ff9e0f;
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
    margin-top: 2px;
    border-radius: 32px;
    width: 32px;
    height: 16px;
  }

  &:before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    bottom: -2px;
    background: white url('/assets/images/DarkModeToggle/sunny.png');
    background-repeat: no-repeat;
    background-position: center;
    -webkit-box-shadow: 0 0px 15px #2020203d;
    box-shadow: 0 0px 15px #2020203d;
    background-size: 18px 18px;
    margin: auto 0;
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
    right: 0.89rem;
    border-radius: 50%;
  }

  input:checked + & {
    background-color: grey;
  }

  input:focus + & {
    -webkit-box-shadow: 0 0 1px #000;
    box-shadow: 0 0 1px #000;
  }

  input:checked + &:before {
    -webkit-transform: translateX(24px);
    -ms-transform: translateX(24px);
    transform: translateX(24px);
    background: white url('/assets/images/DarkModeToggle/night.png');
    background-size: 15px 15px;
    background-repeat: no-repeat;
    background-position: center;
    right: 1.5rem;
  }
`;

export default function DarkModeToggle() {
  return (
    <div className="nav-item mt-auto mb-auto pl-2">
      <StyledLabel>
        <StyledInput type="checkbox" />
        <StyledSlider />
      </StyledLabel>
    </div>
  );
}
