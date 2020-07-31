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
    dots: true,
    slidesToShow: 6,
    dots: false,
    autoplay: true,
    autoplaySpeed: 300000,
    infinite: true,
  };

  const productionCountSettings = {
    arrows: false,
    centerPadding: "0px",
    dots: true,
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
                        <a href="#">Monitoring</a>
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
                                      <a role="menuitem" tabindex="-1" href="#">
                                        All Countries
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        India
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
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
                                      <a role="menuitem" tabindex="-1" href="#">
                                        All States
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Maharashtra
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Nordrhein-Westfalen
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Sikkim
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Goa
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
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
                                      <a role="menuitem" tabindex="-1" href="#">
                                        All Machine Families
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Blister Packaging
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Tablet Press
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Granulation
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Verishield
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Cartoning
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Verishield
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
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
                                      <a role="menuitem" tabindex="-1" href="#">
                                        All Organization
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        ACG Metalcrafts pvt ltd
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        SciTech Centre
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        ACG Pharma Technologies
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Pmec-2019
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Vantage Nutrition LLP
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        GLENMARK PHARMACEUTICALS LTD
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        GLENMARK PHARMACEUTICALS LIMITED
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
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
                                      <a role="menuitem" tabindex="-1" href="#">
                                        All Plants
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        ACG Metalcrafts, Shirwal
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        SciTech Centre, Jogeshwari
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
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
                                  stroke-opacity="0.87"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
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
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M10.5039 16.8646C10.3574 17.1171 10.1471 17.3268 9.89413 17.4725C9.64111 17.6183 9.35425 17.695 9.06227 17.695C8.77029 17.695 8.48343 17.6183 8.23042 17.4725C7.9774 17.3268 7.76711 17.1171 7.62061 16.8646"
                                  stroke="#27A2F8"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <g clip-path="url(#clip0)">
                                  <path
                                    d="M15 17.1667C17.3012 17.1667 19.1667 15.3012 19.1667 13C19.1667 10.6988 17.3012 8.83334 15 8.83334C12.6989 8.83334 10.8334 10.6988 10.8334 13C10.8334 15.3012 12.6989 17.1667 15 17.1667Z"
                                    fill="#27A2F8"
                                    stroke="#27A2F8"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M15 11.3333V14.6667"
                                    stroke="#121212"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M13.3334 13H16.6667"
                                    stroke="#121212"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
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
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M21.653 10.9498C22.3968 11.6928 22.9869 12.5751 23.3895 13.5463C23.7921 14.5174 23.9993 15.5585 23.9993 16.6098C23.9993 17.6611 23.7921 18.7021 23.3895 19.6733C22.9869 20.6445 22.3968 21.5268 21.653 22.2698M10.3463 22.2565C9.60253 21.5135 9.01246 20.6312 8.60986 19.66C8.20727 18.6888 8.00005 17.6478 8.00005 16.5965C8.00005 15.5451 8.20727 14.5041 8.60986 13.5329C9.01246 12.5617 9.60253 11.6794 10.3463 10.9365M25.4263 7.17645C27.926 9.67682 29.3302 13.0676 29.3302 16.6031C29.3302 20.1386 27.926 23.5294 25.4263 26.0298M6.57301 26.0298C4.07339 23.5294 2.66919 20.1386 2.66919 16.6031C2.66919 13.0676 4.07339 9.67682 6.57301 7.17645"
                                            stroke="#39A14E"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
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
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M15.9998 3.26978V16.6031"
                                            stroke="#39A14E"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
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
                                          <g clip-path="url(#clip0)">
                                            <path
                                              d="M22.5623 3.29062L11.3748 3.32187L2.93726 16.2906L13.4373 16.3219L11.5623 28.4781L25.5623 12.2906H21.0623L15.0623 12.2281L22.5623 3.29062Z"
                                              stroke="#27A2F8"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
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
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
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
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M9.63281 4.97034L11.6306 7.29155"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M30.2845 4.97034L28.2867 7.29155"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M3.74365 11.8462L6.44095 13.2967"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M36.1738 11.8462L33.4765 13.2967"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M1.354 20.7232L4.41657 20.7232"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M38.5634 20.7232L35.5008 20.7232"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
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
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M13.333 35.6031H26.6663"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M19.9998 28.9365V35.6031"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <g clip-path="url(#clip0)">
                                            <path
                                              d="M14.0638 23.5198C17.5156 23.5198 20.3138 20.7216 20.3138 17.2698C20.3138 13.818 17.5156 11.0198 14.0638 11.0198C10.6121 11.0198 7.81384 13.818 7.81384 17.2698C7.81384 20.7216 10.6121 23.5198 14.0638 23.5198Z"
                                              stroke="white"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            />
                                            <path
                                              d="M14.064 13.5198V17.2698L16.564 18.5198"
                                              stroke="white"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            />
                                          </g>
                                          <path
                                            d="M29.064 20.1864L29.064 14.3531"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M26.1474 17.2698L29.064 14.3531L31.9807 17.2698"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
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
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M13.333 35.6031H26.6663"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M19.9998 28.9365V35.6031"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <g clip-path="url(#clip0)">
                                            <path
                                              d="M14.0638 23.5198C17.5156 23.5198 20.3138 20.7216 20.3138 17.2698C20.3138 13.818 17.5156 11.0198 14.0638 11.0198C10.6121 11.0198 7.81384 13.818 7.81384 17.2698C7.81384 20.7216 10.6121 23.5198 14.0638 23.5198Z"
                                              stroke="white"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            />
                                            <path
                                              d="M14.064 13.5198V17.2698L16.564 18.5198"
                                              stroke="white"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            />
                                          </g>
                                          <path
                                            d="M29.064 14.3531V20.1864"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M31.9806 17.2698L29.0639 20.1864L26.1472 17.2698"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
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
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fill-opacity="0.6"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fill-opacity="0.6"
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
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fill-opacity="0.6"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fill-opacity="0.6"
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
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fill-opacity="0.6"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fill-opacity="0.6"
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
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fill-opacity="0.6"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fill-opacity="0.6"
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
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fill-opacity="0.6"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fill-opacity="0.6"
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
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fill-opacity="0.6"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fill-opacity="0.6"
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
                                <img src={productCount} />
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
            <div>
              <div className="slide-content">
                <div className="breadcrumsCls">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Monitoring</a>
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
                                      <a role="menuitem" tabindex="-1" href="#">
                                        All Countries
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        India
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
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
                                      <a role="menuitem" tabindex="-1" href="#">
                                        All States
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Maharashtra
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Nordrhein-Westfalen
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Sikkim
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Goa
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
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
                                      <a role="menuitem" tabindex="-1" href="#">
                                        All Machine Families
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Blister Packaging
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Tablet Press
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Granulation
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Verishield
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Cartoning
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Verishield
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
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
                                      <a role="menuitem" tabindex="-1" href="#">
                                        All Organization
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        ACG Metalcrafts pvt ltd
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        SciTech Centre
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        ACG Pharma Technologies
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Pmec-2019
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        Vantage Nutrition LLP
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        GLENMARK PHARMACEUTICALS LTD
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        GLENMARK PHARMACEUTICALS LIMITED
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
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
                                      <a role="menuitem" tabindex="-1" href="#">
                                        All Plants
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        ACG Metalcrafts, Shirwal
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
                                        SciTech Centre, Jogeshwari
                                      </a>
                                    </li>
                                    <li role="presentation">
                                      <a role="menuitem" tabindex="-1" href="#">
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
                                  stroke-opacity="0.87"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
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
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M10.5039 16.8646C10.3574 17.1171 10.1471 17.3268 9.89413 17.4725C9.64111 17.6183 9.35425 17.695 9.06227 17.695C8.77029 17.695 8.48343 17.6183 8.23042 17.4725C7.9774 17.3268 7.76711 17.1171 7.62061 16.8646"
                                  stroke="#27A2F8"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <g clip-path="url(#clip0)">
                                  <path
                                    d="M15 17.1667C17.3012 17.1667 19.1667 15.3012 19.1667 13C19.1667 10.6988 17.3012 8.83334 15 8.83334C12.6989 8.83334 10.8334 10.6988 10.8334 13C10.8334 15.3012 12.6989 17.1667 15 17.1667Z"
                                    fill="#27A2F8"
                                    stroke="#27A2F8"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M15 11.3333V14.6667"
                                    stroke="#121212"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M13.3334 13H16.6667"
                                    stroke="#121212"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
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
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M21.653 10.9498C22.3968 11.6928 22.9869 12.5751 23.3895 13.5463C23.7921 14.5174 23.9993 15.5585 23.9993 16.6098C23.9993 17.6611 23.7921 18.7021 23.3895 19.6733C22.9869 20.6445 22.3968 21.5268 21.653 22.2698M10.3463 22.2565C9.60253 21.5135 9.01246 20.6312 8.60986 19.66C8.20727 18.6888 8.00005 17.6478 8.00005 16.5965C8.00005 15.5451 8.20727 14.5041 8.60986 13.5329C9.01246 12.5617 9.60253 11.6794 10.3463 10.9365M25.4263 7.17645C27.926 9.67682 29.3302 13.0676 29.3302 16.6031C29.3302 20.1386 27.926 23.5294 25.4263 26.0298M6.57301 26.0298C4.07339 23.5294 2.66919 20.1386 2.66919 16.6031C2.66919 13.0676 4.07339 9.67682 6.57301 7.17645"
                                            stroke="#39A14E"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
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
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M15.9998 3.26978V16.6031"
                                            stroke="#39A14E"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
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
                                          <g clip-path="url(#clip0)">
                                            <path
                                              d="M22.5623 3.29062L11.3748 3.32187L2.93726 16.2906L13.4373 16.3219L11.5623 28.4781L25.5623 12.2906H21.0623L15.0623 12.2281L22.5623 3.29062Z"
                                              stroke="#27A2F8"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
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
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
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
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M9.63281 4.97034L11.6306 7.29155"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M30.2845 4.97034L28.2867 7.29155"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M3.74365 11.8462L6.44095 13.2967"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M36.1738 11.8462L33.4765 13.2967"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M1.354 20.7232L4.41657 20.7232"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M38.5634 20.7232L35.5008 20.7232"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
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
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M13.333 35.6031H26.6663"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M19.9998 28.9365V35.6031"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <g clip-path="url(#clip0)">
                                            <path
                                              d="M14.0638 23.5198C17.5156 23.5198 20.3138 20.7216 20.3138 17.2698C20.3138 13.818 17.5156 11.0198 14.0638 11.0198C10.6121 11.0198 7.81384 13.818 7.81384 17.2698C7.81384 20.7216 10.6121 23.5198 14.0638 23.5198Z"
                                              stroke="white"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            />
                                            <path
                                              d="M14.064 13.5198V17.2698L16.564 18.5198"
                                              stroke="white"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            />
                                          </g>
                                          <path
                                            d="M29.064 20.1864L29.064 14.3531"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M26.1474 17.2698L29.064 14.3531L31.9807 17.2698"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
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
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M13.333 35.6031H26.6663"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M19.9998 28.9365V35.6031"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <g clip-path="url(#clip0)">
                                            <path
                                              d="M14.0638 23.5198C17.5156 23.5198 20.3138 20.7216 20.3138 17.2698C20.3138 13.818 17.5156 11.0198 14.0638 11.0198C10.6121 11.0198 7.81384 13.818 7.81384 17.2698C7.81384 20.7216 10.6121 23.5198 14.0638 23.5198Z"
                                              stroke="white"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            />
                                            <path
                                              d="M14.064 13.5198V17.2698L16.564 18.5198"
                                              stroke="white"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            />
                                          </g>
                                          <path
                                            d="M29.064 14.3531V20.1864"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M31.9806 17.2698L29.0639 20.1864L26.1472 17.2698"
                                            stroke="white"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
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
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fill-opacity="0.6"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fill-opacity="0.6"
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
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fill-opacity="0.6"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fill-opacity="0.6"
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
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fill-opacity="0.6"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fill-opacity="0.6"
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
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fill-opacity="0.6"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fill-opacity="0.6"
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
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fill-opacity="0.6"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fill-opacity="0.6"
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
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 3.57869C4.62769 3.57869 2.70455 5.50183 2.70455 7.87415C2.70455 10.2465 4.62769 12.1696 7 12.1696C9.37231 12.1696 11.2955 10.2465 11.2955 7.87415C11.2955 5.50183 9.37231 3.57869 7 3.57869ZM1.75 7.87415C1.75 4.97465 4.1005 2.62415 7 2.62415C9.8995 2.62415 12.25 4.97465 12.25 7.87415C12.25 10.7736 9.8995 13.1241 7 13.1241C4.1005 13.1241 1.75 10.7736 1.75 7.87415Z"
                                            fill="white"
                                            fill-opacity="0.6"
                                          />
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 4.53324C7.26359 4.53324 7.47727 4.74692 7.47727 5.01051V7.57917L9.12253 8.4018C9.3583 8.51969 9.45386 8.80637 9.33598 9.04213C9.2181 9.2779 8.93141 9.37346 8.69565 9.25558L6.78656 8.30103C6.62487 8.22018 6.52273 8.05492 6.52273 7.87415V5.01051C6.52273 4.74692 6.73641 4.53324 7 4.53324Z"
                                            fill="white"
                                            fill-opacity="0.6"
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
                                <img src={productCount} />
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
