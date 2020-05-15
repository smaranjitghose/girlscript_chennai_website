import Link from 'next/link';
import NavLink from '../NavLink';
import DarkModeToggle from '../DarkModeToggle';

 const Navbar = () => {
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
            <NavLink url="/" linkText="HOME" />
            <NavLink url="/announcements" linkText="ANNOUNCEMENTS" />
            <NavLink url="/team" linkText="OUR TEAM" />
            <NavLink url="/achievements" linkText="OUR ACHIEVEMENTS" />
            <NavLink url="/blogs" linkText="BLOGS" />
            <NavLink url="/contact" linkText="CONTACT US" />
            <DarkModeToggle />
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;