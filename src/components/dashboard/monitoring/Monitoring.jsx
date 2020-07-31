import React from "react";
import machineImage from "../images/machineImg.png";
import productCount from "../images/totalProductCount.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Monitoring = () => {
  const fullSettings = {
    arrows: false,
    centerPadding: "0px",
    dots: true,
    slidesToShow: 1,
    infinite: false,
  };

  const statusSettings = {
    arrows: true,
    centerPadding: "0px",
    slidesToShow: 6,
    dots: false,
    autoplay: true,
    autoplaySpeed: 300000,
    infinite: true,
  };

  const productionCountSettings = {
    arrows: false,
    centerPadding: "0px",
    slidesToShow: 6,
    dots: false,
    autoplay: true,
    autoplaySpeed: 500000,
    infinite: true,
  };

  return (
    <div className="wrapper">
      <div className="contentWrap">
        <div className="slick-carousel slickcarouselTop">
          <Slider {...fullSettings}>
            <div>
              <div className="slide-content">
                <div className="breadcrumsCls">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/#">Monitoring</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Line 1/Protab 300-NXT/Serial Number
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="tabArea">
                  <ul className="nav nav-tabs tabsName">
                    <li className="active">
                      <a data-toggle="tab" href="#TabId1">
                        Overview
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#TabId2">
                        Live batch
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#TabId3">
                        KPI
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#TabId4">
                        Alarms
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#TabId5">
                        Diagnostic
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#TabId6">
                        Custom Dashboard
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div id="TabId1" className="tab-pane fade in active">
                      <div className="contentPart">
                        <div className="filterInnerDiv">
                          <span className="filterIcon pointer"></span>
                        </div>
                        <div className="filterDiv">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group searchCls">
                                <form className="form-inline d-flex justify-content-center mb-5">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Search by plant or machine"
                                    aria-label="Search"
                                  />
                                  <i
                                    className="fa fa-search"
                                    aria-hidden="true"
                                  ></i>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="font10">Country</label>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-default dropdown-toggle dropdown-select borderInput"
                                    type="button"
                                    id="menu1"
                                    data-toggle="dropdown"
                                  >
                                    <span className="drop-text">Select</span>
                                    <span className="caret"></span>
                                  </button>
                                  <ul
                                    className="dropdown-menu"
                                    role="menu"
                                    aria-labelledby="menu1"
                                    id="ulmenu1"
                                  >
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        All Countries
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        India
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Germany
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="font10">State</label>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-default dropdown-toggle dropdown-select borderInput"
                                    type="button"
                                    id="menu2"
                                    data-toggle="dropdown"
                                  >
                                    <span className="drop-text">Select</span>
                                    <span className="caret"></span>
                                  </button>
                                  <ul
                                    className="dropdown-menu"
                                    role="menu"
                                    aria-labelledby="menu2"
                                    id="ulmenu2"
                                  >
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        All States
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Maharashtra
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Nordrhein-Westfalen
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Sikkim
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Goa
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Uttar Pradesh
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="font10">Machine Model</label>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-default dropdown-toggle dropdown-select borderInput"
                                    type="button"
                                    id="menu2"
                                    data-toggle="dropdown"
                                  >
                                    <span className="drop-text">Select</span>
                                    <span className="caret"></span>
                                  </button>
                                  <ul
                                    className="dropdown-menu"
                                    role="menu"
                                    aria-labelledby="menu2"
                                    id="ulmenu2"
                                  >
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        All Machine Families
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Blister Packaging
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Tablet Press
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Granulation
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Verishield
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Cartoning
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Verishield
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Encapsulation
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="font10">Organization</label>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-default dropdown-toggle dropdown-select borderInput"
                                    type="button"
                                    id="menu2"
                                    data-toggle="dropdown"
                                  >
                                    <span className="drop-text">Select</span>
                                    <span className="caret"></span>
                                  </button>
                                  <ul
                                    className="dropdown-menu"
                                    role="menu"
                                    aria-labelledby="menu2"
                                    id="ulmenu2"
                                  >
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        All Organization
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        ACG Metalcrafts pvt ltd
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        SciTech Centre
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        ACG Pharma Technologies
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Pmec-2019
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Vantage Nutrition LLP
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        GLENMARK PHARMACEUTICALS LTD
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        GLENMARK PHARMACEUTICALS LIMITED
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Interpack
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="font10">Plant</label>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-default dropdown-toggle dropdown-select borderInput"
                                    type="button"
                                    id="menu2"
                                    data-toggle="dropdown"
                                  >
                                    <span className="drop-text">Select</span>
                                    <span className="caret"></span>
                                  </button>
                                  <ul
                                    className="dropdown-menu"
                                    role="menu"
                                    aria-labelledby="menu2"
                                    id="ulmenu2"
                                  >
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        All Plants
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        ACG Metalcrafts, Shirwal
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        SciTech Centre, Jogeshwari
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        ACG Pharma Technologies, Shirwal
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mapDiv">
                          <div className="BarStatus">
                            <span className="iconStatus">
                              <svg
                                width="16"
                                height="14"
                                viewBox="0 0 16 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.6666 7H11.9999L9.99992 13L5.99992 1L3.99992 7H1.33325"
                                  stroke="white"
                                  strokeOpacity="0.87"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <span className="statusTxt">Status</span>
                            <span className="bellIconPlus">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.2031 7.53333C14.2031 6.1542 13.6553 4.83156 12.6801 3.85637C11.7049 2.88118 10.3823 2.33333 9.00312 2.33333C7.624 2.33333 6.30136 2.88118 5.32617 3.85637C4.35098 4.83156 3.80312 6.1542 3.80312 7.53333C3.80312 13.6 1.20312 15.3333 1.20312 15.3333H9.78312"
                                  stroke="#27A2F8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M10.5039 16.8646C10.3574 17.1171 10.1471 17.3268 9.89413 17.4725C9.64111 17.6183 9.35425 17.695 9.06227 17.695C8.77029 17.695 8.48343 17.6183 8.23042 17.4725C7.9774 17.3268 7.76711 17.1171 7.62061 16.8646"
                                  stroke="#27A2F8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <g clipPath="url(#clip0)">
                                  <path
                                    d="M15 17.1667C17.3012 17.1667 19.1667 15.3012 19.1667 13C19.1667 10.6988 17.3012 8.83334 15 8.83334C12.6989 8.83334 10.8334 10.6988 10.8334 13C10.8334 15.3012 12.6989 17.1667 15 17.1667Z"
                                    fill="#27A2F8"
                                    stroke="#27A2F8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M15 11.3333V14.6667"
                                    stroke="#121212"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M13.3334 13H16.6667"
                                    stroke="#121212"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0">
                                    <rect
                                      width="10"
                                      height="10"
                                      fill="white"
                                      transform="translate(10 8)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                          </div>
                          <div className="SliderScroll">
                            <div
                              className="slick-carousel slickcarousel"
                              id="slickcarousel"
                            >
                              <Slider {...statusSettings}>
                                <div>
                                  <div className="slide-content">
                                    <div className="innerSlide">
                                      <span className="iconSlide">
                                        <svg
                                          width="32"
                                          height="33"
                                          viewBox="0 0 32 33"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M15.9997 19.2698C17.4724 19.2698 18.6663 18.0759 18.6663 16.6031C18.6663 15.1304 17.4724 13.9365 15.9997 13.9365C14.5269 13.9365 13.333 15.1304 13.333 16.6031C13.333 18.0759 14.5269 19.2698 15.9997 19.2698Z"
                                            stroke="#39A14E"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M21.653 10.9498C22.3968 11.6928 22.9869 12.5751 23.3895 13.5463C23.7921 14.5174 23.9993 15.5585 23.9993 16.6098C23.9993 17.6611 23.7921 18.7021 23.3895 19.6733C22.9869 20.6445 22.3968 21.5268 21.653 22.2698M10.3463 22.2565C9.60253 21.5135 9.01246 20.6312 8.60986 19.66C8.20727 18.6888 8.00005 17.6478 8.00005 16.5965C8.00005 15.5451 8.20727 14.5041 8.60986 13.5329C9.01246 12.5617 9.60253 11.6794 10.3463 10.9365M25.4263 7.17645C27.926 9.67682 29.3302 13.0676 29.3302 16.6031C29.3302 20.1386 27.926 23.5294 25.4263 26.0298M6.57301 26.0298C4.07339 23.5294 2.66919 20.1386 2.66919 16.6031C2.66919 13.0676 4.07339 9.67682 6.57301 7.17645"
                                            stroke="#39A14E"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </span>
                                      <span className="iconTxt">Online</span>
                                    </div>
                                    <div className="outerSlideTxt">Status</div>
                                  </div>
                                </div>
                                <div>
                                  <div className="slide-content">
                                    <div className="innerSlide">
                                      <span className="iconSlide">
                                        <svg
                                          width="32"
                                          height="33"
                                          viewBox="0 0 32 33"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M24.4797 9.45645C26.1576 11.1348 27.3001 13.273 27.7628 15.6007C28.2255 17.9284 27.9876 20.341 27.0792 22.5335C26.1709 24.7259 24.6328 26.5999 22.6595 27.9183C20.6862 29.2367 18.3663 29.9403 15.993 29.9403C13.6198 29.9403 11.2999 29.2367 9.32661 27.9183C7.35331 26.5999 5.81523 24.7259 4.90687 22.5335C3.9985 20.341 3.76063 17.9284 4.22334 15.6007C4.68604 13.273 5.82854 11.1348 7.50638 9.45645"
                                            stroke="#39A14E"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M15.9998 3.26978V16.6031"
                                            stroke="#39A14E"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </span>
                                      <span className="iconTxt">ON</span>
                                    </div>
                                    <div className="outerSlideTxt">
                                      Powered ON/OFF
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="slide-content">
                                    <div className="innerSlide">
                                      <span className="iconSlide">
                                        <svg
                                          width="32"
                                          height="33"
                                          viewBox="0 0 32 33"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g clipPath="url(#clip0)">
                                            <path
                                              d="M22.5623 3.29062L11.3748 3.32187L2.93726 16.2906L13.4373 16.3219L11.5623 28.4781L25.5623 12.2906H21.0623L15.0623 12.2281L22.5623 3.29062Z"
                                              stroke="#27A2F8"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                            <path
                                              d="M25.031 21.1344V23.8531H27.5466V21.1344H25.031ZM28.7966 28.9781H27.5466V24.9781H25.031V28.9781H23.8435V20.025H28.7966V28.9781Z"
                                              fill="#27A2F8"
                                            />
                                          </g>
                                          <defs>
                                            <clipPath id="clip0">
                                              <rect
                                                width="32"
                                                height="32"
                                                fill="white"
                                                transform="translate(-0.000244141 0.603119)"
                                              />
                                            </clipPath>
                                          </defs>
                                        </svg>
                                      </span>
                                      <span className="iconTxt">Auto</span>
                                    </div>
                                    <div className="outerSlideTxt">
                                      Machine Mode
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="slide-content">
                                    <div className="innerSlide">
                                      <span className="iconSlide">
                                        <svg
                                          width="40"
                                          height="29"
                                          viewBox="0 0 40 29"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <mask
                                            id="path-1-inside-1"
                                            fill="white"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M37.753 28.3796C38.8471 25.9468 39.4558 23.2484 39.4558 20.4079C39.4558 9.6625 30.745 0.951614 19.9995 0.951614C9.2541 0.951614 0.543213 9.6625 0.543213 20.4079C0.543213 23.2484 1.15192 25.9468 2.24601 28.3796H37.753Z"
                                            />
                                          </mask>
                                          <path
                                            d="M37.753 28.3796V29.3796C38.1466 29.3796 38.5036 29.1487 38.6651 28.7898L37.753 28.3796ZM2.24601 28.3796L1.33399 28.7898C1.49542 29.1487 1.85241 29.3796 2.24601 29.3796V28.3796ZM38.4558 20.4079C38.4558 23.1043 37.8783 25.6631 36.841 27.9695L38.6651 28.7898C39.816 26.2305 40.4558 23.3926 40.4558 20.4079H38.4558ZM19.9995 1.95161C30.1927 1.95161 38.4558 10.2148 38.4558 20.4079H40.4558C40.4558 9.11022 31.2972 -0.0483856 19.9995 -0.0483856V1.95161ZM1.54321 20.4079C1.54321 10.2148 9.80639 1.95161 19.9995 1.95161V-0.0483856C8.70182 -0.0483856 -0.456787 9.11022 -0.456787 20.4079H1.54321ZM3.15803 27.9695C2.12079 25.6631 1.54321 23.1043 1.54321 20.4079H-0.456787C-0.456787 23.3926 0.183047 26.2305 1.33399 28.7898L3.15803 27.9695ZM2.24601 29.3796H37.753V27.3796H2.24601V29.3796Z"
                                            fill="white"
                                            mask="url(#path-1-inside-1)"
                                          />
                                          <path
                                            d="M26.473 13.3331L19.4129 19.5404C19.4034 19.5487 19.394 19.5569 19.3858 19.5658C19.1573 19.7931 19.0312 20.0964 19.0312 20.4197C19.0312 21.0846 19.5719 21.6258 20.2374 21.6258C20.5578 21.6258 20.8605 21.501 21.1173 21.2442L27.3246 14.1841C27.5342 13.9455 27.5225 13.5846 27.2975 13.3596C27.0725 13.1353 26.7133 13.1234 26.473 13.3331Z"
                                            fill="white"
                                          />
                                          <path
                                            d="M20.4048 1.71722V4.77978"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M9.63281 4.97034L11.6306 7.29155"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M30.2845 4.97034L28.2867 7.29155"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M3.74365 11.8462L6.44095 13.2967"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M36.1738 11.8462L33.4765 13.2967"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M1.354 20.7232L4.41657 20.7232"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M38.5634 20.7232L35.5008 20.7232"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </span>
                                      <span className="iconTxt">70</span>
                                    </div>
                                    <div className="outerSlideTxt">
                                      Avg Machine Speed
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="slide-content">
                                    <div className="innerSlide">
                                      <span className="iconSlide">
                                        <svg
                                          width="40"
                                          height="41"
                                          viewBox="0 0 40 41"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M33.333 5.60312H6.66634C4.82539 5.60312 3.33301 7.0955 3.33301 8.93645V25.6031C3.33301 27.4441 4.82539 28.9365 6.66634 28.9365H33.333C35.174 28.9365 36.6663 27.4441 36.6663 25.6031V8.93645C36.6663 7.0955 35.174 5.60312 33.333 5.60312Z"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M13.333 35.6031H26.6663"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M19.9998 28.9365V35.6031"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <g clipPath="url(#clip0)">
                                            <path
                                              d="M14.0638 23.5198C17.5156 23.5198 20.3138 20.7216 20.3138 17.2698C20.3138 13.818 17.5156 11.0198 14.0638 11.0198C10.6121 11.0198 7.81384 13.818 7.81384 17.2698C7.81384 20.7216 10.6121 23.5198 14.0638 23.5198Z"
                                              stroke="white"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                            <path
                                              d="M14.064 13.5198V17.2698L16.564 18.5198"
                                              stroke="white"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </g>
                                          <path
                                            d="M29.064 20.1864L29.064 14.3531"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M26.1474 17.2698L29.064 14.3531L31.9807 17.2698"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <defs>
                                            <clipPath id="clip0">
                                              <rect
                                                width="15"
                                                height="15"
                                                fill="white"
                                                transform="translate(6.56396 9.76978)"
                                              />
                                            </clipPath>
                                          </defs>
                                        </svg>
                                      </span>
                                      <span className="iconTxt">18</span>
                                    </div>
                                    <div className="outerSlideTxt">
                                      Avg Runing hr/day
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="slide-content">
                                    <div className="innerSlide">
                                      <span className="iconSlide">
                                        <svg
                                          width="40"
                                          height="41"
                                          viewBox="0 0 40 41"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M33.333 5.60312H6.66634C4.82539 5.60312 3.33301 7.0955 3.33301 8.93645V25.6031C3.33301 27.4441 4.82539 28.9365 6.66634 28.9365H33.333C35.174 28.9365 36.6663 27.4441 36.6663 25.6031V8.93645C36.6663 7.0955 35.174 5.60312 33.333 5.60312Z"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M13.333 35.6031H26.6663"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M19.9998 28.9365V35.6031"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <g clipPath="url(#clip0)">
                                            <path
                                              d="M14.0638 23.5198C17.5156 23.5198 20.3138 20.7216 20.3138 17.2698C20.3138 13.818 17.5156 11.0198 14.0638 11.0198C10.6121 11.0198 7.81384 13.818 7.81384 17.2698C7.81384 20.7216 10.6121 23.5198 14.0638 23.5198Z"
                                              stroke="white"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                            <path
                                              d="M14.064 13.5198V17.2698L16.564 18.5198"
                                              stroke="white"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </g>
                                          <path
                                            d="M29.064 14.3531V20.1864"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M31.9806 17.2698L29.0639 20.1864L26.1472 17.2698"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <defs>
                                            <clipPath id="clip0">
                                              <rect
                                                width="15"
                                                height="15"
                                                fill="white"
                                                transform="translate(6.56396 9.76978)"
                                              />
                                            </clipPath>
                                          </defs>
                                        </svg>
                                      </span>
                                      <span className="iconTxt">4</span>
                                    </div>
                                    <div className="outerSlideTxt">
                                      Avg Downtime hr/day
                                    </div>
                                  </div>
                                </div>
                              </Slider>
                            </div>
                          </div>
                          <div className="middleDivContent">
                            <div className="row viewAllBtn clswrap">
                              <div className="col-md-6">
                                <div className="threeDView">
                                  <span className="titleIcon">
                                    <svg
                                      width="17"
                                      height="17"
                                      viewBox="0 0 17 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.5 11.1342V5.80089C14.4998 5.56708 14.438 5.33743 14.321 5.135C14.204 4.93257 14.0358 4.76447 13.8333 4.64756L9.16667 1.98089C8.96397 1.86387 8.73405 1.80226 8.5 1.80226C8.26595 1.80226 8.03603 1.86387 7.83333 1.98089L3.16667 4.64756C2.96418 4.76447 2.79599 4.93257 2.67897 5.135C2.56196 5.33743 2.50024 5.56708 2.5 5.80089V11.1342C2.50024 11.368 2.56196 11.5977 2.67897 11.8001C2.79599 12.0026 2.96418 12.1707 3.16667 12.2876L7.83333 14.9542C8.03603 15.0713 8.26595 15.1329 8.5 15.1329C8.73405 15.1329 8.96397 15.0713 9.16667 14.9542L13.8333 12.2876C14.0358 12.1707 14.204 12.0026 14.321 11.8001C14.438 11.5977 14.4998 11.368 14.5 11.1342Z"
                                        stroke="white"
                                        strokeOpacity="0.87"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M2.67993 5.10754L8.49993 8.47421L14.3199 5.10754"
                                        stroke="white"
                                        strokeOpacity="0.87"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M8.5 15.1875V8.46753"
                                        stroke="white"
                                        strokeOpacity="0.87"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                  <span className="titleTxt">3D Viewer</span>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="setView">
                                  <span className="titleIcon">
                                    <svg
                                      width="17"
                                      height="17"
                                      viewBox="0 0 17 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0)">
                                        <path
                                          d="M8.96777 10.2808C10.0723 10.2808 10.9678 9.38539 10.9678 8.28082C10.9678 7.17625 10.0723 6.28082 8.96777 6.28082C7.8632 6.28082 6.96777 7.17625 6.96777 8.28082C6.96777 9.38539 7.8632 10.2808 8.96777 10.2808Z"
                                          stroke="white"
                                          strokeOpacity="0.87"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M13.9011 10.2808C13.8123 10.4819 13.7858 10.705 13.8251 10.9212C13.8643 11.1375 13.9674 11.337 14.1211 11.4942L14.1611 11.5342C14.285 11.658 14.3834 11.805 14.4505 11.9669C14.5176 12.1288 14.5521 12.3023 14.5521 12.4775C14.5521 12.6527 14.5176 12.8262 14.4505 12.9881C14.3834 13.1499 14.285 13.297 14.1611 13.4208C14.0372 13.5448 13.8902 13.6431 13.7283 13.7102C13.5665 13.7773 13.393 13.8119 13.2177 13.8119C13.0425 13.8119 12.869 13.7773 12.7071 13.7102C12.5453 13.6431 12.3982 13.5448 12.2744 13.4208L12.2344 13.3808C12.0773 13.2271 11.8777 13.124 11.6615 13.0848C11.4452 13.0456 11.2221 13.0721 11.0211 13.1608C10.8239 13.2453 10.6557 13.3857 10.5373 13.5645C10.4188 13.7434 10.3553 13.953 10.3544 14.1675V14.2808C10.3544 14.6344 10.2139 14.9736 9.96387 15.2236C9.71383 15.4737 9.37469 15.6142 9.02107 15.6142C8.66744 15.6142 8.32831 15.4737 8.07826 15.2236C7.82821 14.9736 7.68773 14.6344 7.68773 14.2808V14.2208C7.68257 14.0002 7.61114 13.7862 7.48274 13.6066C7.35433 13.4271 7.17489 13.2903 6.96773 13.2142C6.76666 13.1254 6.5436 13.0989 6.32734 13.1382C6.11108 13.1774 5.91152 13.2805 5.7544 13.4342L5.7144 13.4742C5.59057 13.5981 5.44352 13.6965 5.28165 13.7636C5.11979 13.8307 4.94629 13.8652 4.77107 13.8652C4.59585 13.8652 4.42234 13.8307 4.26048 13.7636C4.09861 13.6965 3.95156 13.5981 3.82773 13.4742C3.70376 13.3503 3.60542 13.2033 3.53832 13.0414C3.47122 12.8795 3.43668 12.706 3.43668 12.5308C3.43668 12.3556 3.47122 12.1821 3.53832 12.0202C3.60542 11.8584 3.70376 11.7113 3.82773 11.5875L3.86773 11.5475C4.02142 11.3904 4.12452 11.1908 4.16374 10.9745C4.20295 10.7583 4.17648 10.5352 4.08773 10.3342C4.00322 10.137 3.8629 9.96881 3.68404 9.85036C3.50518 9.73191 3.29559 9.66835 3.08107 9.66749H2.96773C2.61411 9.66749 2.27497 9.52701 2.02492 9.27697C1.77488 9.02692 1.6344 8.68778 1.6344 8.33416C1.6344 7.98053 1.77488 7.6414 2.02492 7.39135C2.27497 7.1413 2.61411 7.00082 2.96773 7.00082H3.02773C3.2484 6.99566 3.4624 6.92424 3.64193 6.79583C3.82146 6.66743 3.95821 6.48798 4.0344 6.28082C4.12314 6.07975 4.14961 5.85669 4.1104 5.64043C4.07119 5.42417 3.96809 5.22461 3.8144 5.06749L3.7744 5.02749C3.65043 4.90366 3.55209 4.75661 3.48499 4.59474C3.41789 4.43288 3.38335 4.25938 3.38335 4.08416C3.38335 3.90894 3.41789 3.73543 3.48499 3.57357C3.55209 3.41171 3.65043 3.26465 3.7744 3.14082C3.89823 3.01686 4.04528 2.91851 4.20715 2.85141C4.36901 2.78431 4.54251 2.74977 4.71773 2.74977C4.89295 2.74977 5.06646 2.78431 5.22832 2.85141C5.39018 2.91851 5.53724 3.01686 5.66107 3.14082L5.70107 3.18082C5.85819 3.33452 6.05774 3.43761 6.27401 3.47683C6.49027 3.51604 6.71332 3.48957 6.9144 3.40082H6.96773C7.16491 3.31632 7.33308 3.17599 7.45153 2.99713C7.56998 2.81827 7.63354 2.60868 7.6344 2.39416V2.28082C7.6344 1.9272 7.77488 1.58806 8.02492 1.33801C8.27497 1.08797 8.61411 0.947491 8.96773 0.947491C9.32135 0.947491 9.66049 1.08797 9.91054 1.33801C10.1606 1.58806 10.3011 1.9272 10.3011 2.28082V2.34082C10.3019 2.55535 10.3655 2.76494 10.4839 2.9438C10.6024 3.12266 10.7706 3.26298 10.9677 3.34749C11.1688 3.43623 11.3919 3.46271 11.6081 3.42349C11.8244 3.38428 12.0239 3.28118 12.1811 3.12749L12.2211 3.08749C12.3449 2.96352 12.4919 2.86518 12.6538 2.79808C12.8157 2.73098 12.9892 2.69644 13.1644 2.69644C13.3396 2.69644 13.5131 2.73098 13.675 2.79808C13.8368 2.86518 13.9839 2.96352 14.1077 3.08749C14.2317 3.21132 14.33 3.35837 14.3971 3.52024C14.4642 3.6821 14.4988 3.8556 14.4988 4.03082C14.4988 4.20604 14.4642 4.37955 14.3971 4.54141C14.33 4.70327 14.2317 4.85033 14.1077 4.97416L14.0677 5.01416C13.914 5.17128 13.8109 5.37083 13.7717 5.5871C13.7325 5.80336 13.759 6.02641 13.8477 6.22749V6.28082C13.9322 6.478 14.0726 6.64617 14.2514 6.76462C14.4303 6.88307 14.6399 6.94663 14.8544 6.94749H14.9677C15.3214 6.94749 15.6605 7.08797 15.9105 7.33801C16.1606 7.58806 16.3011 7.9272 16.3011 8.28082C16.3011 8.63445 16.1606 8.97358 15.9105 9.22363C15.6605 9.47368 15.3214 9.61416 14.9677 9.61416H14.9077C14.6932 9.61501 14.4836 9.67858 14.3048 9.79703C14.1259 9.91548 13.9856 10.0836 13.9011 10.2808V10.2808Z"
                                          stroke="white"
                                          strokeOpacity="0.87"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0">
                                          <rect
                                            width="16"
                                            height="16"
                                            fill="white"
                                            transform="translate(0.967773 0.280823)"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </span>
                                  <span className="titleTxt">Settings</span>
                                  <span
                                    className="viewAllSpan pointer"
                                    id="popup2"
                                    attrb="modelboxopenInnner2"
                                  >
                                    View All
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="row heightper100">
                              <div className="col-md-6 heightper100">
                                <div className="imageMachine heightper100">
                                  <img
                                    src={machineImage}
                                    alt=""
                                    className="img-responsive"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="rightSideDetails">
                                  <ul className="machinedetailsUL">
                                    <li>
                                      <div className="machineON">
                                        Vaccum ON TIme
                                      </div>
                                      <div className="machineON">
                                        3000<span>ppr</span>
                                      </div>
                                      <div className="machineON">
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                        </svg>
                                        <span>02:30 IST | 28 Aug 19</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="machineON">
                                        Vaccum ON TIme
                                      </div>
                                      <div className="machineON">
                                        3000<span>ppr</span>
                                      </div>
                                      <div className="machineON">
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                        </svg>
                                        <span>02:30 IST | 28 Aug 19</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="machineON">
                                        Vaccum ON TIme
                                      </div>
                                      <div className="machineON">
                                        3000<span>ppr</span>
                                      </div>
                                      <div className="machineON">
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                        </svg>
                                        <span>02:30 IST | 28 Aug 19</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="machineON">
                                        Vaccum ON TIme
                                      </div>
                                      <div className="machineON">
                                        3000<span>ppr</span>
                                      </div>
                                      <div className="machineON">
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                        </svg>
                                        <span>02:30 IST | 28 Aug 19</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="machineON">
                                        Vaccum ON TIme
                                      </div>
                                      <div className="machineON">
                                        3000<span>ppr</span>
                                      </div>
                                      <div className="machineON">
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                        </svg>
                                        <span>02:30 IST | 28 Aug 19</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="machineON">
                                        Vaccum ON TIme
                                      </div>
                                      <div className="machineON">
                                        3000<span>ppr</span>
                                      </div>
                                      <div className="machineON">
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                        </svg>
                                        <span>02:30 IST | 28 Aug 19</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="machineON">
                                        Vaccum ON TIme
                                      </div>
                                      <div className="machineON">
                                        3000<span>ppr</span>
                                      </div>
                                      <div className="machineON">
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                        </svg>
                                        <span>02:30 IST | 28 Aug 19</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="machineON">
                                        Vaccum ON TIme
                                      </div>
                                      <div className="machineON">
                                        3000<span>ppr</span>
                                      </div>
                                      <div className="machineON">
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                        </svg>
                                        <span>02:30 IST | 28 Aug 19</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="machineON">
                                        Vaccum ON TIme
                                      </div>
                                      <div className="machineON">
                                        3000<span>ppr</span>
                                      </div>
                                      <div className="machineON">
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                        </svg>
                                        <span>02:30 IST | 28 Aug 19</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="machineON">
                                        Vaccum ON TIme
                                      </div>
                                      <div className="machineON">
                                        3000<span>ppr</span>
                                      </div>
                                      <div className="machineON">
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                        </svg>
                                        <span>02:30 IST | 28 Aug 19</span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bottomDivContent">
                            <div className="bottomBar viewAllBtn clswrap">
                              <span className="titleIcon">
                                <img src={productCount} alt="" />
                              </span>
                              <span className="titleTxt">
                                Total Production Count
                              </span>
                              <span
                                className="viewAllSpan pointer popupcomn"
                                id="popup1"
                                attrb="modelboxopenInnner1"
                              >
                                View All
                              </span>
                            </div>
                            <div className="marqueTxt">
                              <div className="clsLastMonth">Last Month:</div>
                              <div className="slick-carousel slickmarque dayCount">
                                <Slider {...productionCountSettings}>
                                  <div>
                                    <div className="slide-content">
                                      01 May 20:<span>102560</span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="slide-content">
                                      02 May 20:<span>102560</span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="slide-content">
                                      03 May 20:<span>102560</span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="slide-content">
                                      04 May 20:<span>NA</span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="slide-content">
                                      05 May 20:<span>102560</span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="slide-content">
                                      06 May 20:<span>102560</span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="slide-content">
                                      07 May 20:<span>NA</span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="slide-content">
                                      08 May 20:<span>102560</span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="slide-content">
                                      09 May 20:<span>102560</span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="slide-content">
                                      10 May 20:<span>102560</span>
                                    </div>
                                  </div>
                                </Slider>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="TabId2" className="tab-pane fade">
                      <div className="contentPart">
                        <div className="filterInnerDiv">
                          <span className="filterIcon pointer"></span>
                        </div>
                        <div className="filterDiv">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group searchCls">
                                <form className="form-inline d-flex justify-content-center mb-5">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Search by plant or machine"
                                    aria-label="Search"
                                  />
                                  <i
                                    className="fa fa-search"
                                    aria-hidden="true"
                                  ></i>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="mapDiv allMachineList"
                          id="allMachineList"
                        >
                          <div className="innerMachine"></div>
                        </div>
                      </div>
                    </div>
                    <div id="TabId3" className="tab-pane fade">
                      <div className="contentPart">
                        <div className="filterInnerDiv">
                          <span className="filterIcon pointer"></span>
                        </div>
                        <div className="filterDiv">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group searchCls">
                                <form className="form-inline d-flex justify-content-center mb-5">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Search by plant or machine"
                                    aria-label="Search"
                                  />
                                  <i
                                    className="fa fa-search"
                                    aria-hidden="true"
                                  ></i>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="mapDiv allMachineList"
                          id="allMachineList"
                        >
                          <div className="innerMachine"></div>
                        </div>
                      </div>
                    </div>
                    <div id="TabId4" className="tab-pane fade">
                      <div className="contentPart">
                        <div className="filterInnerDiv">
                          <span className="filterIcon pointer"></span>
                        </div>
                        <div className="filterDiv">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group searchCls">
                                <form className="form-inline d-flex justify-content-center mb-5">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Search by plant or machine"
                                    aria-label="Search"
                                  />
                                  <i
                                    className="fa fa-search"
                                    aria-hidden="true"
                                  ></i>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="mapDiv allMachineList"
                          id="allMachineList"
                        >
                          <div className="innerMachine"></div>
                        </div>
                      </div>
                    </div>
                    <div id="TabId5" className="tab-pane fade">
                      <div className="contentPart">
                        <div className="filterInnerDiv">
                          <span className="filterIcon pointer"></span>
                        </div>
                        <div className="filterDiv">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group searchCls">
                                <form className="form-inline d-flex justify-content-center mb-5">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Search by plant or machine"
                                    aria-label="Search"
                                  />
                                  <i
                                    className="fa fa-search"
                                    aria-hidden="true"
                                  ></i>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="mapDiv allMachineList"
                          id="allMachineList"
                        >
                          <div className="innerMachine"></div>
                        </div>
                      </div>
                    </div>
                    <div id="TabId6" className="tab-pane fade">
                      <div className="contentPart">
                        <div className="filterInnerDiv">
                          <span className="filterIcon pointer"></span>
                        </div>
                        <div className="filterDiv">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group searchCls">
                                <form className="form-inline d-flex justify-content-center mb-5">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Search by plant or machine"
                                    aria-label="Search"
                                  />
                                  <i
                                    className="fa fa-search"
                                    aria-hidden="true"
                                  ></i>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="mapDiv allMachineList"
                          id="allMachineList"
                        >
                          <div className="innerMachine"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="slide-content">
                <div className="breadcrumsCls">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/#">Monitoring</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Line 1/Protab 300-NXT/Serial Number
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="tabArea">
                  <ul className="nav nav-tabs tabsName">
                    <li className="active">
                      <a data-toggle="tab" href="#TabId1">
                        Overview
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#TabId2">
                        Live batch
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#TabId3">
                        KPI
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#TabId4">
                        Alarms
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#TabId5">
                        Diagnostic
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#TabId6">
                        Custom Dashboard
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div id="TabId1" className="tab-pane fade in active">
                      <div className="contentPart">
                        <div className="filterInnerDiv">
                          <span className="filterIcon pointer"></span>
                        </div>
                        <div className="filterDiv">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group searchCls">
                                <form className="form-inline d-flex justify-content-center mb-5">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Search by plant or machine"
                                    aria-label="Search"
                                  />
                                  <i
                                    className="fa fa-search"
                                    aria-hidden="true"
                                  ></i>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="font10">Country</label>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-default dropdown-toggle dropdown-select borderInput"
                                    type="button"
                                    id="menu1"
                                    data-toggle="dropdown"
                                  >
                                    <span className="drop-text">Select</span>
                                    <span className="caret"></span>
                                  </button>
                                  <ul
                                    className="dropdown-menu"
                                    role="menu"
                                    aria-labelledby="menu1"
                                    id="ulmenu1"
                                  >
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        All Countries
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        India
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Germany
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="font10">State</label>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-default dropdown-toggle dropdown-select borderInput"
                                    type="button"
                                    id="menu2"
                                    data-toggle="dropdown"
                                  >
                                    <span className="drop-text">Select</span>
                                    <span className="caret"></span>
                                  </button>
                                  <ul
                                    className="dropdown-menu"
                                    role="menu"
                                    aria-labelledby="menu2"
                                    id="ulmenu2"
                                  >
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        All States
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Maharashtra
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Nordrhein-Westfalen
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Sikkim
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Goa
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Uttar Pradesh
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="font10">Machine Model</label>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-default dropdown-toggle dropdown-select borderInput"
                                    type="button"
                                    id="menu2"
                                    data-toggle="dropdown"
                                  >
                                    <span className="drop-text">Select</span>
                                    <span className="caret"></span>
                                  </button>
                                  <ul
                                    className="dropdown-menu"
                                    role="menu"
                                    aria-labelledby="menu2"
                                    id="ulmenu2"
                                  >
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        All Machine Families
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Blister Packaging
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Tablet Press
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Granulation
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Verishield
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Cartoning
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Verishield
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Encapsulation
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="font10">Organization</label>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-default dropdown-toggle dropdown-select borderInput"
                                    type="button"
                                    id="menu2"
                                    data-toggle="dropdown"
                                  >
                                    <span className="drop-text">Select</span>
                                    <span className="caret"></span>
                                  </button>
                                  <ul
                                    className="dropdown-menu"
                                    role="menu"
                                    aria-labelledby="menu2"
                                    id="ulmenu2"
                                  >
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        All Organization
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        ACG Metalcrafts pvt ltd
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        SciTech Centre
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        ACG Pharma Technologies
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Pmec-2019
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Vantage Nutrition LLP
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        GLENMARK PHARMACEUTICALS LTD
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        GLENMARK PHARMACEUTICALS LIMITED
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        Interpack
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="font10">Plant</label>
                                <div className="dropdown">
                                  <button
                                    className="btn btn-default dropdown-toggle dropdown-select borderInput"
                                    type="button"
                                    id="menu2"
                                    data-toggle="dropdown"
                                  >
                                    <span className="drop-text">Select</span>
                                    <span className="caret"></span>
                                  </button>
                                  <ul
                                    className="dropdown-menu"
                                    role="menu"
                                    aria-labelledby="menu2"
                                    id="ulmenu2"
                                  >
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        All Plants
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        ACG Metalcrafts, Shirwal
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        SciTech Centre, Jogeshwari
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a
                                        role="menuitem"
                                        tabIndex="-1"
                                        href="/#"
                                      >
                                        ACG Pharma Technologies, Shirwal
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mapDiv">
                          <div className="BarStatus">
                            <span className="iconStatus">
                              <svg
                                width="16"
                                height="14"
                                viewBox="0 0 16 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.6666 7H11.9999L9.99992 13L5.99992 1L3.99992 7H1.33325"
                                  stroke="white"
                                  strokeOpacity="0.87"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <span className="statusTxt">Status</span>
                            <span className="bellIconPlus">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.2031 7.53333C14.2031 6.1542 13.6553 4.83156 12.6801 3.85637C11.7049 2.88118 10.3823 2.33333 9.00312 2.33333C7.624 2.33333 6.30136 2.88118 5.32617 3.85637C4.35098 4.83156 3.80312 6.1542 3.80312 7.53333C3.80312 13.6 1.20312 15.3333 1.20312 15.3333H9.78312"
                                  stroke="#27A2F8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M10.5039 16.8646C10.3574 17.1171 10.1471 17.3268 9.89413 17.4725C9.64111 17.6183 9.35425 17.695 9.06227 17.695C8.77029 17.695 8.48343 17.6183 8.23042 17.4725C7.9774 17.3268 7.76711 17.1171 7.62061 16.8646"
                                  stroke="#27A2F8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <g clipPath="url(#clip0)">
                                  <path
                                    d="M15 17.1667C17.3012 17.1667 19.1667 15.3012 19.1667 13C19.1667 10.6988 17.3012 8.83334 15 8.83334C12.6989 8.83334 10.8334 10.6988 10.8334 13C10.8334 15.3012 12.6989 17.1667 15 17.1667Z"
                                    fill="#27A2F8"
                                    stroke="#27A2F8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M15 11.3333V14.6667"
                                    stroke="#121212"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M13.3334 13H16.6667"
                                    stroke="#121212"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0">
                                    <rect
                                      width="10"
                                      height="10"
                                      fill="white"
                                      transform="translate(10 8)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                          </div>
                          <div className="SliderScroll">
                            <div
                              className="slick-carousel slickcarousel"
                              id="slickcarousel"
                            >
                              <Slider {...statusSettings}>
                                <div>
                                  <div className="slide-content">
                                    <div className="innerSlide">
                                      <span className="iconSlide">
                                        <svg
                                          width="32"
                                          height="33"
                                          viewBox="0 0 32 33"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M15.9997 19.2698C17.4724 19.2698 18.6663 18.0759 18.6663 16.6031C18.6663 15.1304 17.4724 13.9365 15.9997 13.9365C14.5269 13.9365 13.333 15.1304 13.333 16.6031C13.333 18.0759 14.5269 19.2698 15.9997 19.2698Z"
                                            stroke="#39A14E"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M21.653 10.9498C22.3968 11.6928 22.9869 12.5751 23.3895 13.5463C23.7921 14.5174 23.9993 15.5585 23.9993 16.6098C23.9993 17.6611 23.7921 18.7021 23.3895 19.6733C22.9869 20.6445 22.3968 21.5268 21.653 22.2698M10.3463 22.2565C9.60253 21.5135 9.01246 20.6312 8.60986 19.66C8.20727 18.6888 8.00005 17.6478 8.00005 16.5965C8.00005 15.5451 8.20727 14.5041 8.60986 13.5329C9.01246 12.5617 9.60253 11.6794 10.3463 10.9365M25.4263 7.17645C27.926 9.67682 29.3302 13.0676 29.3302 16.6031C29.3302 20.1386 27.926 23.5294 25.4263 26.0298M6.57301 26.0298C4.07339 23.5294 2.66919 20.1386 2.66919 16.6031C2.66919 13.0676 4.07339 9.67682 6.57301 7.17645"
                                            stroke="#39A14E"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </span>
                                      <span className="iconTxt">Online</span>
                                    </div>
                                    <div className="outerSlideTxt">Status</div>
                                  </div>
                                </div>
                                <div>
                                  <div className="slide-content">
                                    <div className="innerSlide">
                                      <span className="iconSlide">
                                        <svg
                                          width="32"
                                          height="33"
                                          viewBox="0 0 32 33"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M24.4797 9.45645C26.1576 11.1348 27.3001 13.273 27.7628 15.6007C28.2255 17.9284 27.9876 20.341 27.0792 22.5335C26.1709 24.7259 24.6328 26.5999 22.6595 27.9183C20.6862 29.2367 18.3663 29.9403 15.993 29.9403C13.6198 29.9403 11.2999 29.2367 9.32661 27.9183C7.35331 26.5999 5.81523 24.7259 4.90687 22.5335C3.9985 20.341 3.76063 17.9284 4.22334 15.6007C4.68604 13.273 5.82854 11.1348 7.50638 9.45645"
                                            stroke="#39A14E"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M15.9998 3.26978V16.6031"
                                            stroke="#39A14E"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </span>
                                      <span className="iconTxt">ON</span>
                                    </div>
                                    <div className="outerSlideTxt">
                                      Powered ON/OFF
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="slide-content">
                                    <div className="innerSlide">
                                      <span className="iconSlide">
                                        <svg
                                          width="32"
                                          height="33"
                                          viewBox="0 0 32 33"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g clipPath="url(#clip0)">
                                            <path
                                              d="M22.5623 3.29062L11.3748 3.32187L2.93726 16.2906L13.4373 16.3219L11.5623 28.4781L25.5623 12.2906H21.0623L15.0623 12.2281L22.5623 3.29062Z"
                                              stroke="#27A2F8"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                            <path
                                              d="M25.031 21.1344V23.8531H27.5466V21.1344H25.031ZM28.7966 28.9781H27.5466V24.9781H25.031V28.9781H23.8435V20.025H28.7966V28.9781Z"
                                              fill="#27A2F8"
                                            />
                                          </g>
                                          <defs>
                                            <clipPath id="clip0">
                                              <rect
                                                width="32"
                                                height="32"
                                                fill="white"
                                                transform="translate(-0.000244141 0.603119)"
                                              />
                                            </clipPath>
                                          </defs>
                                        </svg>
                                      </span>
                                      <span className="iconTxt">Auto</span>
                                    </div>
                                    <div className="outerSlideTxt">
                                      Machine Mode
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="slide-content">
                                    <div className="innerSlide">
                                      <span className="iconSlide">
                                        <svg
                                          width="40"
                                          height="29"
                                          viewBox="0 0 40 29"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <mask
                                            id="path-1-inside-1"
                                            fill="white"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M37.753 28.3796C38.8471 25.9468 39.4558 23.2484 39.4558 20.4079C39.4558 9.6625 30.745 0.951614 19.9995 0.951614C9.2541 0.951614 0.543213 9.6625 0.543213 20.4079C0.543213 23.2484 1.15192 25.9468 2.24601 28.3796H37.753Z"
                                            />
                                          </mask>
                                          <path
                                            d="M37.753 28.3796V29.3796C38.1466 29.3796 38.5036 29.1487 38.6651 28.7898L37.753 28.3796ZM2.24601 28.3796L1.33399 28.7898C1.49542 29.1487 1.85241 29.3796 2.24601 29.3796V28.3796ZM38.4558 20.4079C38.4558 23.1043 37.8783 25.6631 36.841 27.9695L38.6651 28.7898C39.816 26.2305 40.4558 23.3926 40.4558 20.4079H38.4558ZM19.9995 1.95161C30.1927 1.95161 38.4558 10.2148 38.4558 20.4079H40.4558C40.4558 9.11022 31.2972 -0.0483856 19.9995 -0.0483856V1.95161ZM1.54321 20.4079C1.54321 10.2148 9.80639 1.95161 19.9995 1.95161V-0.0483856C8.70182 -0.0483856 -0.456787 9.11022 -0.456787 20.4079H1.54321ZM3.15803 27.9695C2.12079 25.6631 1.54321 23.1043 1.54321 20.4079H-0.456787C-0.456787 23.3926 0.183047 26.2305 1.33399 28.7898L3.15803 27.9695ZM2.24601 29.3796H37.753V27.3796H2.24601V29.3796Z"
                                            fill="white"
                                            mask="url(#path-1-inside-1)"
                                          />
                                          <path
                                            d="M26.473 13.3331L19.4129 19.5404C19.4034 19.5487 19.394 19.5569 19.3858 19.5658C19.1573 19.7931 19.0312 20.0964 19.0312 20.4197C19.0312 21.0846 19.5719 21.6258 20.2374 21.6258C20.5578 21.6258 20.8605 21.501 21.1173 21.2442L27.3246 14.1841C27.5342 13.9455 27.5225 13.5846 27.2975 13.3596C27.0725 13.1353 26.7133 13.1234 26.473 13.3331Z"
                                            fill="white"
                                          />
                                          <path
                                            d="M20.4048 1.71722V4.77978"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M9.63281 4.97034L11.6306 7.29155"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M30.2845 4.97034L28.2867 7.29155"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M3.74365 11.8462L6.44095 13.2967"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M36.1738 11.8462L33.4765 13.2967"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M1.354 20.7232L4.41657 20.7232"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M38.5634 20.7232L35.5008 20.7232"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </span>
                                      <span className="iconTxt">70</span>
                                    </div>
                                    <div className="outerSlideTxt">
                                      Avg Machine Speed
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="slide-content">
                                    <div className="innerSlide">
                                      <span className="iconSlide">
                                        <svg
                                          width="40"
                                          height="41"
                                          viewBox="0 0 40 41"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M33.333 5.60312H6.66634C4.82539 5.60312 3.33301 7.0955 3.33301 8.93645V25.6031C3.33301 27.4441 4.82539 28.9365 6.66634 28.9365H33.333C35.174 28.9365 36.6663 27.4441 36.6663 25.6031V8.93645C36.6663 7.0955 35.174 5.60312 33.333 5.60312Z"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M13.333 35.6031H26.6663"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M19.9998 28.9365V35.6031"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <g clipPath="url(#clip0)">
                                            <path
                                              d="M14.0638 23.5198C17.5156 23.5198 20.3138 20.7216 20.3138 17.2698C20.3138 13.818 17.5156 11.0198 14.0638 11.0198C10.6121 11.0198 7.81384 13.818 7.81384 17.2698C7.81384 20.7216 10.6121 23.5198 14.0638 23.5198Z"
                                              stroke="white"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                            <path
                                              d="M14.064 13.5198V17.2698L16.564 18.5198"
                                              stroke="white"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </g>
                                          <path
                                            d="M29.064 20.1864L29.064 14.3531"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M26.1474 17.2698L29.064 14.3531L31.9807 17.2698"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <defs>
                                            <clipPath id="clip0">
                                              <rect
                                                width="15"
                                                height="15"
                                                fill="white"
                                                transform="translate(6.56396 9.76978)"
                                              />
                                            </clipPath>
                                          </defs>
                                        </svg>
                                      </span>
                                      <span className="iconTxt">18</span>
                                    </div>
                                    <div className="outerSlideTxt">
                                      Avg Runing hr/day
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="slide-content">
                                    <div className="innerSlide">
                                      <span className="iconSlide">
                                        <svg
                                          width="40"
                                          height="41"
                                          viewBox="0 0 40 41"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M33.333 5.60312H6.66634C4.82539 5.60312 3.33301 7.0955 3.33301 8.93645V25.6031C3.33301 27.4441 4.82539 28.9365 6.66634 28.9365H33.333C35.174 28.9365 36.6663 27.4441 36.6663 25.6031V8.93645C36.6663 7.0955 35.174 5.60312 33.333 5.60312Z"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M13.333 35.6031H26.6663"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M19.9998 28.9365V35.6031"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <g clipPath="url(#clip0)">
                                            <path
                                              d="M14.0638 23.5198C17.5156 23.5198 20.3138 20.7216 20.3138 17.2698C20.3138 13.818 17.5156 11.0198 14.0638 11.0198C10.6121 11.0198 7.81384 13.818 7.81384 17.2698C7.81384 20.7216 10.6121 23.5198 14.0638 23.5198Z"
                                              stroke="white"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                            <path
                                              d="M14.064 13.5198V17.2698L16.564 18.5198"
                                              stroke="white"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </g>
                                          <path
                                            d="M29.064 14.3531V20.1864"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M31.9806 17.2698L29.0639 20.1864L26.1472 17.2698"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <defs>
                                            <clipPath id="clip0">
                                              <rect
                                                width="15"
                                                height="15"
                                                fill="white"
                                                transform="translate(6.56396 9.76978)"
                                              />
                                            </clipPath>
                                          </defs>
                                        </svg>
                                      </span>
                                      <span className="iconTxt">4</span>
                                    </div>
                                    <div className="outerSlideTxt">
                                      Avg Downtime hr/day
                                    </div>
                                  </div>
                                </div>
                              </Slider>
                            </div>
                          </div>
                          <div className="middleDivContent">
                            <div className="row heightper100">
                              <div className="col-md-6 heightper100">
                                <div className="imageMachine heightper100">
                                  <img
                                    src={machineImage}
                                    alt=""
                                    className="img-responsive"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="rightSideDetails">
                                  <ul className="machinedetailsUL">
                                    <li>
                                      <div className="machineON">
                                        Vaccum ON TIme
                                      </div>
                                      <div className="machineON">
                                        3000<span>ppr</span>
                                      </div>
                                      <div className="machineON">
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                        </svg>
                                        <span>02:30 IST | 28 Aug 19</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="machineON">
                                        Vaccum ON TIme
                                      </div>
                                      <div className="machineON">
                                        3000<span>ppr</span>
                                      </div>
                                      <div className="machineON">
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                        </svg>
                                        <span>02:30 IST | 28 Aug 19</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="machineON">
                                        Vaccum ON TIme
                                      </div>
                                      <div className="machineON">
                                        3000<span>ppr</span>
                                      </div>
                                      <div className="machineON">
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                        </svg>
                                        <span>02:30 IST | 28 Aug 19</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="machineON">
                                        Vaccum ON TIme
                                      </div>
                                      <div className="machineON">
                                        3000<span>ppr</span>
                                      </div>
                                      <div className="machineON">
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                        </svg>
                                        <span>02:30 IST | 28 Aug 19</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="machineON">
                                        Vaccum ON TIme
                                      </div>
                                      <div className="machineON">
                                        3000<span>ppr</span>
                                      </div>
                                      <div className="machineON">
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                        </svg>
                                        <span>02:30 IST | 28 Aug 19</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="machineON">
                                        Vaccum ON TIme
                                      </div>
                                      <div className="machineON">
                                        3000<span>ppr</span>
                                      </div>
                                      <div className="machineON">
                                        <svg
                                          width="14"
                                          height="15"
                                          viewBox="0 0 14 15"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fillOpacity="0.6"
                                          />
                                        </svg>
                                        <span>02:30 IST | 28 Aug 19</span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bottomDivContent">
                            <div className="bottomBar viewAllBtn">
                              <span className="titleIcon">
                                <img src={productCount} alt="" />
                              </span>
                              <span className="titleTxt">
                                Total Production Count
                              </span>
                              <span className="viewAllSpan">View All</span>
                            </div>
                            <div className="marqueTxt">
                              <div className="clsLastMonth">Last Month:</div>
                              <div className="slick-carousel slickmarque dayCount">
                                <Slider {...productionCountSettings}>
                                  <div>
                                    <div className="slide-content">
                                      01 May 20:<span>102560</span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="slide-content">
                                      02 May 20:<span>102560</span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="slide-content">
                                      03 May 20:<span>102560</span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="slide-content">
                                      04 May 20:<span>NA</span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="slide-content">
                                      05 May 20:<span>102560</span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="slide-content">
                                      06 May 20:<span>102560</span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="slide-content">
                                      07 May 20:<span>NA</span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="slide-content">
                                      08 May 20:<span>102560</span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="slide-content">
                                      09 May 20:<span>102560</span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="slide-content">
                                      10 May 20:<span>102560</span>
                                    </div>
                                  </div>
                                </Slider>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="TabId2" className="tab-pane fade">
                      <div className="contentPart">
                        <div className="filterInnerDiv">
                          <span className="filterIcon pointer"></span>
                        </div>
                        <div className="filterDiv">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group searchCls">
                                <form className="form-inline d-flex justify-content-center mb-5">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Search by plant or machine"
                                    aria-label="Search"
                                  />
                                  <i
                                    className="fa fa-search"
                                    aria-hidden="true"
                                  ></i>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="mapDiv allMachineList"
                          id="allMachineList"
                        >
                          <div className="innerMachine"></div>
                        </div>
                      </div>
                    </div>
                    <div id="TabId3" className="tab-pane fade">
                      <div className="contentPart">
                        <div className="filterInnerDiv">
                          <span className="filterIcon pointer"></span>
                        </div>
                        <div className="filterDiv">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group searchCls">
                                <form className="form-inline d-flex justify-content-center mb-5">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Search by plant or machine"
                                    aria-label="Search"
                                  />
                                  <i
                                    className="fa fa-search"
                                    aria-hidden="true"
                                  ></i>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="mapDiv allMachineList"
                          id="allMachineList"
                        >
                          <div className="innerMachine"></div>
                        </div>
                      </div>
                    </div>
                    <div id="TabId4" className="tab-pane fade">
                      <div className="contentPart">
                        <div className="filterInnerDiv">
                          <span className="filterIcon pointer"></span>
                        </div>
                        <div className="filterDiv">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group searchCls">
                                <form className="form-inline d-flex justify-content-center mb-5">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Search by plant or machine"
                                    aria-label="Search"
                                  />
                                  <i
                                    className="fa fa-search"
                                    aria-hidden="true"
                                  ></i>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="mapDiv allMachineList"
                          id="allMachineList"
                        >
                          <div className="innerMachine"></div>
                        </div>
                      </div>
                    </div>
                    <div id="TabId5" className="tab-pane fade">
                      <div className="contentPart">
                        <div className="filterInnerDiv">
                          <span className="filterIcon pointer"></span>
                        </div>
                        <div className="filterDiv">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group searchCls">
                                <form className="form-inline d-flex justify-content-center mb-5">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Search by plant or machine"
                                    aria-label="Search"
                                  />
                                  <i
                                    className="fa fa-search"
                                    aria-hidden="true"
                                  ></i>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="mapDiv allMachineList"
                          id="allMachineList"
                        >
                          <div className="innerMachine"></div>
                        </div>
                      </div>
                    </div>
                    <div id="TabId6" className="tab-pane fade">
                      <div className="contentPart">
                        <div className="filterInnerDiv">
                          <span className="filterIcon pointer"></span>
                        </div>
                        <div className="filterDiv">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group searchCls">
                                <form className="form-inline d-flex justify-content-center mb-5">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Search by plant or machine"
                                    aria-label="Search"
                                  />
                                  <i
                                    className="fa fa-search"
                                    aria-hidden="true"
                                  ></i>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="mapDiv allMachineList"
                          id="allMachineList"
                        >
                          <div className="innerMachine"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
