import Link from 'next/link';
import NavLink from '../NavLink';
import DarkModeToggle from '../DarkModeToggle';

export default function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg" id="navbar">
        <Link href="/">
          <a className="navbar-brand">
            <img
              src="assets/images/Logo/Navbar-Light-Logo.png"
              id="logo"
              alt="Girl Script Chennai Chapter Logo"
              aria-label="Girl Script Chennai Chapter Logo"
            />
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ml-5">
            <NavLink url="" linkText="HOME" />
            <NavLink url="" linkText="ANNOUNCEMENTS" />
            <NavLink url="" linkText="OUR TEAM" />
            <NavLink url="" linkText="OUR ACHIEVEMENTS" />
            <NavLink url="" linkText="BLOGS" />
            <NavLink url="" linkText="CONTACT US" />
            <DarkModeToggle />
          </ul>
        </div>
      </nav>
    </>
  );
}
