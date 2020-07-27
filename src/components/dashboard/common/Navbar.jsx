import React, { useState } from "react";
import navLogo from "../images/home_logo.png";

const Navbar = () => {
  // make notifications dynamic
  const [notifications, setNotifications] = useState(false);
  const [profile, setProfile] = useState(false);

  return (
    <header className="header" id="header">
      <div className="logoDiv">
        <img src={navLogo} alt="Logo" />
      </div>
      <div className="loginDiv">
        <div className="nav-collapsecollapse">
          <div className="pull-right">
            <ul
              className="nav navbar-nav navbar-right loginDropdown"
              id="loginDropdown"
            >
              <li className={`dropdown liItem1 ${notifications ? "open" : ""}`}>
                {/* eslint-disable-next-line */}
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  onClick={() => setNotifications((prev) => !prev)}
                >
                  <span className="fa-stack fa-1x">
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.4812 1.64199C7.58903 1.537 7.73528 1.47802 7.88778 1.47802H8.11278C8.26528 1.47802 8.41154 1.537 8.51937 1.64199C8.6272 1.74698 8.68778 1.88938 8.68778 2.03786V2.40297H8.5265C8.3496 2.38899 8.17157 2.38351 7.99282 2.38675C7.84474 2.38685 7.69792 2.39232 7.55257 2.40297H7.31278V2.03786C7.31278 1.88938 7.37336 1.74698 7.4812 1.64199ZM6.47945 2.58069V2.03786C6.47945 1.67419 6.62783 1.32542 6.89194 1.06827C7.15606 0.811122 7.51427 0.666656 7.88778 0.666656H8.11278C8.4863 0.666656 8.84451 0.811122 9.10863 1.06827C9.37274 1.32542 9.52112 1.67419 9.52112 2.03786V2.57377C10.4246 2.81471 11.2739 3.28214 12.0067 3.94605C12.5219 4.40126 12.937 4.98141 13.2257 5.63985C13.5148 6.29921 13.6712 7.02328 13.6854 7.75846L13.6856 7.76607L13.6855 12.2765L15.1552 14.8208C15.2277 14.9464 15.2264 15.1001 15.1516 15.2245C15.0769 15.3489 14.94 15.4253 14.792 15.4253H10.5949C10.4617 15.9415 10.1748 16.4081 9.76574 16.7536C9.27284 17.17 8.64112 17.3772 8.00032 17.3255C7.35952 17.3772 6.7278 17.17 6.2349 16.7536C5.82587 16.4081 5.53897 15.9415 5.40573 15.4253H1.20866C1.06078 15.4253 0.923986 15.349 0.849202 15.2248C0.774418 15.1006 0.772853 14.9471 0.845089 14.8215L2.30821 12.2769V7.76607C2.30821 5.28081 4.0834 3.20715 6.47945 2.58069ZM7.58438 3.21433C5.08888 3.41154 3.14154 5.38185 3.14154 7.76607V12.3827C3.14154 12.4521 3.12326 12.5203 3.08844 12.5809L1.91944 14.614H5.74621L5.75293 14.6139H10.2477L10.2544 14.614H14.0796L12.9056 12.5816C12.8706 12.5209 12.8521 12.4524 12.8521 12.3827V7.76998C12.8395 7.13694 12.7044 6.51753 12.4593 5.95843C12.2136 5.39821 11.8653 4.9163 11.445 4.54534L11.4408 4.54166C10.5794 3.76061 9.55209 3.30564 8.49078 3.21433H7.58438ZM6.78104 16.1408C6.55773 15.9522 6.3842 15.7054 6.27701 15.4253H9.72363C9.61644 15.7054 9.44291 15.9522 9.2196 16.1408C8.88361 16.4247 8.46116 16.5556 8.04208 16.5145C8.01431 16.5118 7.98633 16.5118 7.95856 16.5145C7.53948 16.5556 7.11703 16.4247 6.78104 16.1408Z"
                        fill="#ffffff"
                      />
                    </svg>
                    <span className="badge">17</span>
                  </span>
                </a>
                <ul
                  className="dropdown-menu dropdown-lr animated flipInX"
                  role="menu"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="machineAlert heightDiv">
                        <div className="alertHeading">
                          <h3 className="heahingAlert font12">
                            Machine Custom Alerts
                          </h3>
                        </div>
                        <div className="alertContent">
                          <ul className="alertContentUl">
                            <li>
                              <span className="closeIconAlert">
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.0005 1L1.00049 11"
                                    stroke="#8F8F8F"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M1.00049 1L11.0005 11"
                                    stroke="#8F8F8F"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                              <div className="alertContentTxt">
                                Line 2/Legacy 6100/61000219208 - Machine Speed
                                is greater than 100
                                <span className="timeSpan">Just now</span>
                              </div>
                            </li>
                            <li>
                              <span className="closeIconAlert">
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.0005 1L1.00049 11"
                                    stroke="#8F8F8F"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M1.00049 1L11.0005 11"
                                    stroke="#8F8F8F"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                              <div className="alertContentTxt">
                                Line 2/Legacy 6100/61000219208 - Machine Speed
                                is greater than 100
                                <span className="timeSpan">Just now</span>
                              </div>
                            </li>
                          </ul>
                          <div className="viewAllBtn">
                            <span>View All</span>
                          </div>
                        </div>
                        <div className="smartAlert">
                          <h3 className="heahingAlert font12">
                            Smart Maintenance Alerts
                          </h3>
                          <ul className="alertContentUl">
                            <li>
                              <span className="closeIconAlert">
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.0005 1L1.00049 11"
                                    stroke="#8F8F8F"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M1.00049 1L11.0005 11"
                                    stroke="#8F8F8F"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                              <div className="alertContentTxt">
                                Line 2/Legacy 6100/61000219208 - Machine Speed
                                is greater than 100
                                <span className="timeSpan">Just now</span>
                              </div>
                            </li>
                            <li>
                              <span className="closeIconAlert">
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.0005 1L1.00049 11"
                                    stroke="#8F8F8F"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M1.00049 1L11.0005 11"
                                    stroke="#8F8F8F"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                              <div className="alertContentTxt">
                                Line 2/Legacy 6100/61000219208 - Machine Speed
                                is greater than 100
                                <span className="timeSpan">Just now</span>
                              </div>
                            </li>
                            <li>
                              <span className="closeIconAlert">
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.0005 1L1.00049 11"
                                    stroke="#8F8F8F"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M1.00049 1L11.0005 11"
                                    stroke="#8F8F8F"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                              <div className="alertContentTxt">
                                Line 2/Legacy 6100/61000219208 - Machine Speed
                                is greater than 100
                                <span className="timeSpan">Just now</span>
                              </div>
                            </li>
                          </ul>
                          <div className="viewAllBtn">
                            <span>Clear All Notification</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>

              <li className={`dropdown liItem2 ${profile ? "open" : ""}`}>
                {/* eslint-disable-next-line */}
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  onClick={() => setProfile((prev) => !prev)}
                >
                  Plant Head
                  <span className="caret"></span>
                </a>
                <ul
                  className="dropdown-menu dropdown-lr animated slideInRight"
                  role="menu"
                >
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#">
                      <span className="nameEmailBtn">
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.47631 11.143C4.10143 10.5179 4.94928 10.1667 5.83333 10.1667H11.1667C12.0507 10.1667 12.8986 10.5179 13.5237 11.143C14.1488 11.7681 14.5 12.6159 14.5 13.5V14.8333C14.5 15.2015 14.2015 15.5 13.8333 15.5C13.4651 15.5 13.1667 15.2015 13.1667 14.8333V13.5C13.1667 12.9696 12.956 12.4609 12.5809 12.0858C12.2058 11.7107 11.6971 11.5 11.1667 11.5H5.83333C5.3029 11.5 4.79419 11.7107 4.41912 12.0858C4.04405 12.4609 3.83333 12.9696 3.83333 13.5V14.8333C3.83333 15.2015 3.53486 15.5 3.16667 15.5C2.79848 15.5 2.5 15.2015 2.5 14.8333V13.5C2.5 12.616 2.85119 11.7681 3.47631 11.143Z"
                            fill="#27A2F8"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.49984 3.50001C7.39527 3.50001 6.49984 4.39544 6.49984 5.5C6.49984 6.60457 7.39527 7.5 8.49984 7.5C9.60441 7.5 10.4998 6.60457 10.4998 5.5C10.4998 4.39544 9.60441 3.50001 8.49984 3.50001ZM5.1665 5.5C5.1665 3.65906 6.65889 2.16667 8.49984 2.16667C10.3408 2.16667 11.8332 3.65906 11.8332 5.5C11.8332 7.34095 10.3408 8.83334 8.49984 8.83334C6.65889 8.83334 5.1665 7.34095 5.1665 5.5Z"
                            fill="#27A2F8"
                          />
                        </svg>
                      </span>
                      <span className="nameUserDiv">
                        <div className="nameUser">John Doe</div>
                        <div className="emailUser">johndoe@gmail.com</div>
                      </span>
                    </a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line */}
                    <a href="#">
                      <span className="logoutBtn">
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.72474 4.78853C4.98513 5.04884 4.9852 5.47095 4.7249 5.73134C3.97919 6.47729 3.47141 7.4276 3.26577 8.46212C3.06012 9.49664 3.16584 10.5689 3.56956 11.5433C3.97328 12.5178 4.65686 13.3506 5.53389 13.9366C6.41091 14.5225 7.44199 14.8353 8.49675 14.8353C9.55151 14.8353 10.5826 14.5225 11.4596 13.9366C12.3366 13.3506 13.0202 12.5178 13.4239 11.5433C13.8277 10.5689 13.9334 9.49664 13.7277 8.46212C13.5221 7.4276 13.0143 6.47729 12.2686 5.73134C12.0083 5.47095 12.0084 5.04884 12.2688 4.78853C12.5291 4.52822 12.9513 4.52829 13.2116 4.78868C14.1437 5.72112 14.7784 6.90901 15.0355 8.20216C15.2925 9.49531 15.1604 10.8356 14.6557 12.0537C14.1511 13.2717 13.2966 14.3128 12.2003 15.0452C11.104 15.7777 9.8152 16.1686 8.49675 16.1686C7.1783 16.1686 5.88945 15.7777 4.79317 15.0452C3.69689 14.3128 2.84241 13.2717 2.33776 12.0537C1.83311 10.8356 1.70096 9.49531 1.95802 8.20216C2.21508 6.90901 2.8498 5.72112 3.78193 4.78868C4.04224 4.52829 4.46435 4.52822 4.72474 4.78853Z"
                              fill="#27A2F8"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.50016 1.50002C8.86835 1.50002 9.16683 1.79849 9.16683 2.16668V8.83335C9.16683 9.20154 8.86835 9.50002 8.50016 9.50002C8.13197 9.50002 7.8335 9.20154 7.8335 8.83335V2.16668C7.8335 1.79849 8.13197 1.50002 8.50016 1.50002Z"
                              fill="#27A2F8"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0">
                              <rect
                                width="16"
                                height="16"
                                fill="white"
                                transform="translate(0.5 0.833344)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span className="logoutTxt">Logout</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
