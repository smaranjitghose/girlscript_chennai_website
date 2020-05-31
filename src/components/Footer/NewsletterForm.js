import styled from 'styled-components';
import { useState } from 'react';

const StyledFormContainer = styled.div`
  @media only screen and (max-width: 770px) {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
  }
  h3 {
    font-family: 'Quicksand', sans-serif;
    color: #fff;
  }
  .border {
    width: 280px;
    height: 3px;
    background: orangeOrange;
    color: orangeOrange;
    border-style: none !important;
    margin: 0 auto;
  }
  p {
    font-family: 'Quicksand', sans-serif;
    margin-top: 1%;
    color: #c4c4c4;
    letter-spacing: 1px;
  }
  .emailInput {
    font-family: 'Quicksand', sans-serif;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 10px 32px;
    font-size: 16px;
    color: #293043;
    background: #ddd;
    border: none;
    font-weight: 700;
    outline: none;
    border-radius: 30px;
    min-width: 260px;
  }
  .emailInput::placeholder {
    font-family: 'Quicksand', sans-serif;
  }
  .emailInput:focus.emailInput:invalid {
    border: 3px solid orange;
  }
  .emailInput:valid {
    border: 3px solid #f47621;
  }
`;
const StyledButton = styled.button`
  font-family: 'Quicksand', sans-serif;
  border-radius: 10em;
  color: #c4c4c4;
  border-color: orange;
  width: 100px;
  height: 42px;
  border: 1.5px solid #f47621;
  -webkit-transition: all 300ms ease-in;
  -o-transition: all 300ms ease-in;
  transition: all 300ms ease-in;
  letter-spacing: 1px;
  border-radius: 5px;
  &:hover {
    background-color: orange;
    color: white;
    background: #f47621;
  }
`;
const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const changeEmail = e => {
    setEmail(e.target.value);
  };

  const subscribeToNewsletter = event => {
    event.preventDefault();
    const userEmail = email;
    console.log(userEmail);

    axios
      .post('https://desolate-waters-45820.herokuapp.com/newsletter', {
        email: userEmail,
      })

      .then(response => {
        console.log(response);
        const status = response.data.status;
        if (status === 'success') {
          const successMessage = document.querySelector('#success-message');
          successMessage.classList.remove('hide');
          setTimeout(() => {
            successMessage.remove();
          }, 3000);
        }

        setEmail('');
      })

      // Catching the error

      .catch(error => {
        console.log(error.response);
        setEmail(' ');
        const successMessage = document.querySelector('#success-message');
        successMessage.classList.remove('hide');
        successMessage.innerHTML = 'Something is wrong. Try again later!';

        setTimeout(() => {
          successMessage.remove();
        }, 3000);
      });
  };

  return (
    <StyledFormContainer className="col-lg-6 col-md-8 mb-5">
      <br />
      <h3 className="footer-h">Subscribe</h3>
      <div className="border"></div>
      <p className="footer-p">To the Newsletter</p>
      <form name="footermail" onSubmit={event => subscribeToNewsletter(event)}>
        <input
          type="email"
          id="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          name="email"
          className="emailInput mr-2 mb-2 mt-4"
          placeholder="Enter Your Email"
          value={email}
          onChange={changeEmail}
          required
        />
        <StyledButton className="btn" type="submit">
          Send
        </StyledButton>
      </form>
      <p className="success-message hide" id="success-message">
        Thank you for subscribing
      </p>
    </StyledFormContainer>
  );
};
export default NewsletterForm;
