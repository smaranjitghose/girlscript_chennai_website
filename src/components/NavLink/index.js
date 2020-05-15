import styled from 'styled-components';
import Link from 'next/link';

const StyledNavLink = styled.li`
  @media only screen and (max-width: 1185px) {
    font-size: 0.93rem;
  }

  @media only screen and (max-width: 1141px) {
    font-size: 0.85rem;
  }

  @media only screen and (max-width: 1094px) {
    font-size: 0.72rem;
  }

  @media only screen and (max-width: 1054px) {
    font-size: 0.71rem;
  }

  @media only screen and (max-width: 998px) {
    font-size: 0.7rem;
  }
`;

const NavLink = (url, linkText) => {
  return (
    <StyledNavLink className="nav-item">
      <Link href={url}>
        <a className="nav-link">
          <span>{linkText}</span>
        </a>
      </Link>
    </StyledNavLink>
  );
}

export default NavLink;