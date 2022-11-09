import React, { ReactElement } from "react";

const TopContactBar = (): ReactElement => {
  return (
    <>
      <div className="navbar-top d-none d-lg-block">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center justify-content-center">
              <ul className="nav justify-content-center justify-content-md-start">
                <li
                  className="nav-item me-3"
                  data-bs-toggle="tooltip"
                  data-bs-animation="false"
                  data-bs-placement="bottom"
                  title="Sunday CLOSED"
                >
                  <span>
                    <i className="far fa-clock me-2"></i>Visit time: Mon-Sat
                    9:00-19:00
                  </span>
                </li>
                <li className="nav-item">
                  <a
                    className="navbar-link"
                    href="@/components/header/ContactBar#"
                  >
                    <i className="fas fa-headset me-2"></i>Call us now:
                    +135-869-328
                  </a>
                </li>
              </ul>
            </div>

            <div className="d-flex align-items-center justify-content-center">
              <div className="dropdown ms-3">
                <a
                  className="dropdown-toggle"
                  href="@/components/header/ContactBar#"
                  role="button"
                  id="dropdownLanguage"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  <img
                    className="fa-fw me-2"
                    src="assets/images/flags/uk.svg"
                    alt=""
                  />{" "}
                  English{" "}
                </a>
                <div
                  className="dropdown-menu mt-2 shadow"
                  aria-labelledby="dropdownLanguage"
                >
                  <span className="dropdown-item-text">Select language</span>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item"
                    href="@/components/header/ContactBar#"
                  >
                    <img
                      className="fa-fw me-2"
                      src="assets/images/flags/sp.svg"
                      alt=""
                    />{" "}
                    Español
                  </a>
                  <a
                    className="dropdown-item"
                    href="@/components/header/ContactBar#"
                  >
                    <img
                      className="fa-fw me-2"
                      src="assets/images/flags/fr.svg"
                      alt=""
                    />{" "}
                    Français
                  </a>
                  <a
                    className="dropdown-item"
                    href="@/components/header/ContactBar#"
                  >
                    <img
                      className="fa-fw me-2"
                      src="assets/images/flags/gr.svg"
                      alt=""
                    />{" "}
                    Deutsch
                  </a>
                </div>
              </div>

              <ul className="nav ms-3">
                <li className="nav-item">
                  <a href="contact.html" className="nav-link">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="@/components/header/ContactBar#"
                    className="nav-link"
                    data-bs-toggle="modal"
                    data-bs-target="#topbarlogin"
                  >
                    <i className="far fa-user me-2"></i>Login
                  </a>
                </li>
              </ul>

              <ul className="list-unstyled d-flex">
                <li>
                  <a className="px-2" href="@/components/header/ContactBar#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a className="px-2" href="@/components/header/ContactBar#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="ps-2" href="@/components/header/ContactBar#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="divider-light opacity-1"></div>
    </>
  );
};

export default TopContactBar;
