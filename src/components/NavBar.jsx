import React from "react";
import "./NavBar.scss";

const NavBar = ({ bgColor = "black", currentPage = "about", onNavClick }) => {
  return (
    <div
      className={`nav-bar-container ${
        bgColor === "white" ? "bg-white" : "bg-black"
      }`}
    >
      <div className="icon-wrapper">
        <a
          href="mailto:revanthmohanraj2000@gmail.com?subject=Subject%20Text&body=Body%20Text"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="mail"
            xmlns="http://www.w3.org/2000/svg"
            id="mail"
            viewBox="0 0 29 29"
          >
            <path d="M2 7.42v14.172l7.086-7.086zM3.408 6l8.971 8.971c1.133 1.133 3.109 1.133 4.242 0L25.592 6H3.408z" />
            <path d="M18.035 16.385c-.943.944-2.199 1.465-3.535 1.465s-2.592-.521-3.535-1.465l-.465-.465L3.42 23h22.16l-7.08-7.08-.465.465zM19.914 14.506L27 21.592V7.42z" />
          </svg>
        </a>
      </div>

      <div className="icon-wrapper">
        <a
          href="https://www.linkedin.com/in/revanthmohanraj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="linkedin"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 5 1036 990"
            id="linkedin"
          >
            <path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z" />
          </svg>
        </a>
      </div>

      <div className="icon-wrapper">
        <a
          href="https://www.instagram.com/revanth_mohanraj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="instagram"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="instagram"
          >
            <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path>{" "}
          </svg>
        </a>
      </div>

      {currentPage && (
        <div className="skill-section-navigator">
          <div className="nav-wrapper">
            <div className="line">
              <div
                className="navigation-link"
                onClick={() => onNavClick(currentPage)}
              >
                {currentPage}
              </div>
              <div className="light"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
