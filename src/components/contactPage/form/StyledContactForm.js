import styled from 'styled-components';

export const StyledContactForm = styled.div`
        border: 0px;
        text-align: left;
        -webkit-box-shadow: 0 3px 14px rgba(0, 0, 0, 0.2);
        box-shadow: 0 3px 14px rgba(0, 0, 0, 0.2);
        -webkit-transition: 0.6s;
        -o-transition: 0.6s;
        transition: 0.6s;
        background-color: var(--bg2-color);
        margin-left: 10rem;
        border-radius: 7px;

        &:hover {
                text-align: left;
                -webkit-transition: 0.6s;
                -o-transition: 0.6s;
                transition: 0.6s;
        }

        > p {
                color: rgba(0, 0, 0, 0.644);
                letter-spacing: 1px;
        }

        @media only screen and (max-width: 994px) {
                margin-left: 0;

                > h1 {
                        font-size: 2.1rem;
                }
        }
`;
