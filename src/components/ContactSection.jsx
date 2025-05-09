import React from 'react';
import './ContactSection.scss'

const ContactSection = ({id}) => {
  return (
    <div className="contact-container" id={id}>
      <div className="contact-section-wrapper">
        <div className="name-section">
          <div className="name-role-wrapper">
            <div className="first-name">Revanth</div>
            <div className="sub-section">
              <div className="role-section">
                <div className="role-1">Full-stack</div>
                <div className="role-2">Developer</div>
              </div>
              <div className="last-name">Mohanraj</div>
            </div>
          </div>
        </div>
        <div className="contact-section">
          <div className="header">.../Contacts ...</div>
          <div className="body">
            <div className="mini-nav-bar">
              <div className="home nav-item">Home</div>
              <div className="About nav-item">About</div>
              <div className="Work nav-item">Work</div>
            </div>
            <div className="site-wrapper">
              <div className="site-header">Site</div>
              <div className="credit-section">
                <p>Handcrafted by Myself &nbsp;/</p>
                <p style={{ lineHeight: '1.2', margin: 0 }}>
                  ReactJS version inspired by Nithin-Charles’s Angular portfolio. &nbsp;/
                </p>              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="personal-link-section">
          <div className="capsule-wrapper">
            <a href="https://github.com/RevanthMohanraj" target="_blank">
              <div className="capsule">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="github"
                >
                  <path
                    d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"
                  ></path>
                </svg>
                <p>Github</p>
              </div>
            </a>
          </div>
          <div className="capsule-wrapper">
                <a
                  href="https://www.linkedin.com/in/revanthmohanraj/"
                  target="_blank"
                >
              <div className="capsule">
                <svg
                  className="linkedin"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2500"
                  height="2389"
                  viewBox="0 5 1036 990"
                  id="linkedin"
                >
                  <path
                    d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"
                  ></path>
                </svg>
                <p>LinkedIn</p>
              </div>
            </a>
          </div>
          <div className="capsule-wrapper">
            <a
              href="mailto:revanthmohanraj2000@gmail.com?subject=Subject%20Text&body=Body%20Text"
              target="_blank"
            >
              <div className="email capsule">
                <svg
                  className="mail"
                  xmlns="http://www.w3.org/2000/svg"
                  id="mail"
                  x="0"
                  y="0"
                  version="1.1"
                  viewBox="0 0 29 29"
                  xmlSpace="preserve"
                >
                  <path
                    d="M2 7.42v14.172l7.086-7.086zM3.408 6l8.971 8.971c1.133 1.133 3.109 1.133 4.242 0L25.592 6H3.408z"
                  ></path>
                  <path
                    d="M18.035 16.385c-.943.944-2.199 1.465-3.535 1.465s-2.592-.521-3.535-1.465l-.465-.465L3.42 23h22.16l-7.08-7.08-.465.465zM19.914 14.506L27 21.592V7.42z"
                  ></path>
                </svg>
                <p>Email</p>
              </div>
            </a>
          </div>
          <div className="capsule-wrapper">
            <a
              href="https://www.instagram.com/revanth_mohanraj/"
              target="_blank"
            >
              <div className="capsule">
                <svg
                  className="instagram"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="instagram"
                >
                  <path
                    d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"
                  ></path>
                </svg>
                <p>Instagram</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
