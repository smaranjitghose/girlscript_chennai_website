import { useState } from 'react';
import styled from 'styled-components';

import { StyledContactForm } from './StyledContactForm';
import { StyledFontWeight } from './StyledFontWeight';
import { StyledColorTheme } from './StyledColorTheme';
import { StyledCapBox } from './StyledCapbox';

export const StyledFormGroup = styled.div`
        position: relative;
        margin-bottom: 2.5rem;

        > ${StyledCapBox} {
                -webkit-flex-basis: 70%;
                -ms-flex-preferred-size: 70%;
                flex-basis: 70%;
                max-width: 70%;
                margin-bottom: 0;
                padding-left: 20px;

                @media only screen and (max-width: 576px) {
                        -webkit-flex-basis: 100%;
                        -ms-flex-preferred-size: 100%;
                        flex-basis: 100%;
                        max-width: 100%;
                        padding-left: 0;
                }
        }
`;

const ContactForm = () => {
        const handleSubmit = evt => {
                evt.preventDefault();
                alert('Thanks for Submitting');
        };

        const [value, setValue] = useState({
                name: '',
                email: '',
                subject: '',
                message: '',
                captchaInput: '',
        });

        return (
                <StyledContactForm className="col-lg-6 col-md-12 col-sm-12 col-xs-12 p-4">
                        <StyledFontWeight className="mb-1">
                                Contact
                                <StyledColorTheme>Us</StyledColorTheme>
                        </StyledFontWeight>
                        <form
                                className="form-horizontal"
                                name="myForm"
                                action="https://formspree.io/xyz@gmail.com"
                                method="post"
                                onSubmit={handleSubmit}
                        >
                                <StyledFormGroup className="pb-3">
                                        <span className="error-message" id="error-name">
                                                <i className="fa fa-exclamation-triangle"></i> <span> Error</span>
                                        </span>

                                        <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder=" "
                                                className="form-control no-border"
                                                value={value.name}
                                                onChange={e => setValue({ ...value, name: e.target.value })}
                                        />
                                        <label className="form-control-placeholder" htmlFor="name">
                                                Name
                                        </label>
                                </StyledFormGroup>
                                <StyledFormGroup className="pb-3">
                                        <span className="error-message" id="error-email">
                                                <i className="fa fa-exclamation-triangle"></i> <span> Error</span>
                                        </span>

                                        <input
                                                type="email"
                                                id="email_id"
                                                name="email"
                                                placeholder=" "
                                                className="form-control no-border"
                                                value={value.email}
                                                onChange={e => setValue({ ...value, email: e.target.value })}
                                        />
                                        <label className="form-control-placeholder" htmlFor="email">
                                                Email Address
                                        </label>
                                </StyledFormGroup>
                                <StyledFormGroup className="pb-3">
                                        <span className="error-message" id="error-subject">
                                                <i className="fa fa-exclamation-triangle"></i> <span> Error</span>
                                        </span>

                                        <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                placeholder=" "
                                                className="form-control no-border"
                                                value={value.subject}
                                                onChange={e => setValue({ ...value, subject: e.target.value })}
                                        />
                                        <label className="form-control-placeholder" htmlFor="subject">
                                                Subject
                                        </label>
                                </StyledFormGroup>
                                <StyledFormGroup>
                                        <span className="error-message" id="error-message">
                                                <i className="fa fa-exclamation-triangle"></i> <span> Error</span>
                                        </span>

                                        <textarea
                                                name="message"
                                                id="message"
                                                placeholder=" "
                                                rows="4"
                                                onInput="return validateForm('message')"
                                                className="form-control no-border"
                                                value={value.message}
                                                onChange={e => setValue({ ...value, message: e.target.value })}
                                        ></textarea>
                                        <label className="form-control-placeholder" htmlFor="message">
                                                Your Message
                                        </label>
                                </StyledFormGroup>
                                <StyledCapBox>
                                        <span className="error-message" id="error-captcha">
                                                <i className="fa fa-exclamation-triangle"></i> <span> Error</span>
                                        </span>

                                        <input type="text" readOnly id="CaptchaDiv" />
                                        <StyledFormGroup>
                                                <input
                                                        type="number"
                                                        className="form-control no-border"
                                                        placeholder=" "
                                                        name="captchaInput"
                                                        id="CaptchaInput"
                                                        value={value.CaptchaInput}
                                                        onChange={e =>
                                                                setValue({ ...value, captchaInput: e.target.value })
                                                        }
                                                />
                                                <label className="form-control-placeholder" htmlFor="CaptchaInput">
                                                        Enter the Captcha
                                                </label>
                                        </StyledFormGroup>
                                </StyledCapBox>
                                <button
                                        type="submit"
                                        className="btn btn-lg mt-2 center-btn-settings center-btn-settings2 mb-3"
                                        id="submit-button"
                                >
                                        Send Message
                                </button>
                        </form>
                </StyledContactForm>
        );
};

export default ContactForm;
