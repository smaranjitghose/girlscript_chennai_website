import Link from 'next/link';

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
            <li className="nav-item">
              <a className="nav-link active" href="index.html">
                <span>HOME</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="announcements.html">
                <span>ANNOUNCEMENTS</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="team.html">
                <span>OUR TEAM</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="achievements.html">
                <span>OUR ACHIEVEMENTS</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blogs.html">
                <span>BLOGS</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contactUs.html">
                <span>CONTACT US</span>
              </a>
            </li>
            <div
              className="nav-item mt-auto mb-auto pl-2"
              id="themeChangeButtonBigScreen"
            >
              <label className="switch" id="themeChangeButton">
                <input type="checkbox" name="theme" id="theme" />
                <span className="slider round"></span>
              </label>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}
