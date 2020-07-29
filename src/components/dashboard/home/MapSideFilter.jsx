import React, { useState } from "react";
import fillIcon from "../images/filterFill.png";
import notFillIcon from "../images/filterNotFill.png";

const MapSideFilter = (props) => {
  const {
    filterState,
    mapRef,
    googleRef,
    filterVisible,
    setFilterVisible,
  } = props;

  // country and state list recieved from demographic service
  const { countries, states } = filterState.content || {
    countries: [],
    states: [],
  };

  // to handle opening and closing of dropdown
  const [currentDropdown, setCurrentDropdown] = useState(null);
  // display selected filter
  const [activeFilter, setActiveFilter] = useState({
    country: null,
    state: null,
  });

  const handleDropdownClick = (event) => {
    if (event.target.id === currentDropdown) setCurrentDropdown(null);
    else setCurrentDropdown(event.target.id);
  };

  // zoom to selected address
  const zoomMap = (address) => {
    const geocoder = new googleRef.maps.Geocoder();
    geocoder.geocode({ address: address }, function (results, status) {
      if (status === "OK") {
        mapRef.panTo(results[0].geometry.location);
        mapRef.setZoom(5);
      } else {
        console.log(status);
      }
    });
    setCurrentDropdown(null);
    setActiveFilter({
      ...activeFilter,
      [currentDropdown]: address,
    });
  };

  return (
    <React.Fragment>
      <div className="filterInnerDiv">
        <span
          className="filterIcon pointer"
          style={{
            background: `#27333d url(${
              filterVisible ? fillIcon : notFillIcon
            }) no-repeat center`,
          }}
          onClick={() => setFilterVisible((prevState) => !prevState)}
        ></span>
      </div>
      <div className={`filterDiv ${filterVisible ? "" : "removedWidth"}`}>
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
                <i className="fa fa-search" aria-hidden="true"></i>
              </form>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label className="font10">Country</label>
              <div
                // prettier-ignore
                className={`dropdown ${currentDropdown === "country" ? "open" : ""}`}
              >
                <button
                  className="btn btn-default dropdown-toggle dropdown-select borderInput"
                  type="button"
                  id="country"
                  data-toggle="dropdown"
                  onClick={handleDropdownClick}
                >
                  <span className="drop-text">
                    {activeFilter.country || "Select"}
                  </span>
                  <span className="caret"></span>
                </button>
                <ul
                  className="dropdown-menu"
                  role="menu"
                  aria-labelledby="country"
                  id="ulmenu1"
                  onClick={(e) => zoomMap(e.target.name)}
                >
                  <li role="presentation">
                    {/* eslint-disable-next-line */}
                    <a role="menuitem" tabIndex="-1" href="#" name="all">
                      All Countries
                    </a>
                  </li>
                  {countries &&
                    countries.map((country, index) => (
                      <li role="presentation" key={index}>
                        {/* eslint-disable-next-line */}
                        <a
                          role="menuitem"
                          tabIndex="-1"
                          href="#"
                          name={country}
                        >
                          {country}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label className="font10">State</label>
              <div
                // prettier-ignore
                className={`dropdown ${currentDropdown === "state" ? "open" : ""}`}
              >
                <button
                  className="btn btn-default dropdown-toggle dropdown-select borderInput"
                  type="button"
                  id="state"
                  data-toggle="dropdown"
                  onClick={handleDropdownClick}
                >
                  <span className="drop-text">
                    {activeFilter.state || "Select"}
                  </span>
                  <span className="caret"></span>
                </button>
                <ul
                  className="dropdown-menu"
                  role="menu"
                  aria-labelledby="state"
                  id="ulmenu2"
                  onClick={(e) => zoomMap(e.target.name)}
                >
                  <li role="presentation">
                    {/* eslint-disable-next-line */}
                    <a role="menuitem" tabIndex="-1" href="#">
                      All States
                    </a>
                  </li>
                  {states &&
                    states.map((state, index) => (
                      <li role="presentation" key={index}>
                        {/* eslint-disable-next-line */}
                        <a role="menuitem" tabIndex="-1" href="#" name={state}>
                          {state}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label className="font10">Machine Model</label>
              <div
                className={`dropdown ${
                  currentDropdown === "menu3" ? "open" : ""
                }`}
              >
                <button
                  className="btn btn-default dropdown-toggle dropdown-select borderInput"
                  type="button"
                  id="menu3"
                  data-toggle="dropdown"
                  onClick={handleDropdownClick}
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
                    {/* eslint-disable-next-line */}
                    <a role="menuitem" tabIndex="-1" href="#">
                      All Machine Families
                    </a>
                  </li>
                  <li role="presentation">
                    {/* eslint-disable-next-line */}
                    <a role="menuitem" tabIndex="-1" href="#">
                      Blister Packaging
                    </a>
                  </li>
                  <li role="presentation">
                    {/* eslint-disable-next-line */}
                    <a role="menuitem" tabIndex="-1" href="#">
                      Tablet Press
                    </a>
                  </li>
                  <li role="presentation">
                    {/* eslint-disable-next-line */}
                    <a role="menuitem" tabIndex="-1" href="#">
                      Granulation
                    </a>
                  </li>
                  <li role="presentation">
                    {/* eslint-disable-next-line */}
                    <a role="menuitem" tabIndex="-1" href="#">
                      Verishield
                    </a>
                  </li>
                  <li role="presentation">
                    {/* eslint-disable-next-line */}
                    <a role="menuitem" tabIndex="-1" href="#">
                      Cartoning
                    </a>
                  </li>
                  <li role="presentation">
                    {/* eslint-disable-next-line */}
                    <a role="menuitem" tabIndex="-1" href="#">
                      Verishield
                    </a>
                  </li>
                  <li role="presentation">
                    {/* eslint-disable-next-line */}
                    <a role="menuitem" tabIndex="-1" href="#">
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
              <div
                className={`dropdown ${
                  currentDropdown === "menu4" ? "open" : ""
                }`}
              >
                <button
                  className="btn btn-default dropdown-toggle dropdown-select borderInput"
                  type="button"
                  id="menu4"
                  data-toggle="dropdown"
                  onClick={handleDropdownClick}
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
                    {/* eslint-disable-next-line */}
                    <a role="menuitem" tabIndex="-1" href="#">
                      All Organization
                    </a>
                  </li>
                  <li role="presentation">
                    {/* eslint-disable-next-line */}
                    <a role="menuitem" tabIndex="-1" href="#">
                      ACG Metalcrafts pvt ltd
                    </a>
                  </li>
                  <li role="presentation">
                    {/* eslint-disable-next-line */}
                    <a role="menuitem" tabIndex="-1" href="#">
                      SciTech Centre
                    </a>
                  </li>
                  <li role="presentation">
                    {/* eslint-disable-next-line */}
                    <a role="menuitem" tabIndex="-1" href="#">
                      ACG Pharma Technologies
                    </a>
                  </li>
                  <li role="presentation">
                    {/* eslint-disable-next-line */}
                    <a role="menuitem" tabIndex="-1" href="#">
                      Pmec-2019
                    </a>
                  </li>
                  <li role="presentation">
                    {/* eslint-disable-next-line */}
                    <a role="menuitem" tabIndex="-1" href="#">
                      Vantage Nutrition LLP
                    </a>
                  </li>
                  <li role="presentation">
                    {/* eslint-disable-next-line */}
                    <a role="menuitem" tabIndex="-1" href="#">
                      GLENMARK PHARMACEUTICALS LTD
                    </a>
                  </li>
                  <li role="presentation">
                    {/* eslint-disable-next-line */}
                    <a role="menuitem" tabIndex="-1" href="#">
                      GLENMARK PHARMACEUTICALS LIMITED
                    </a>
                  </li>
                  <li role="presentation">
                    {/* eslint-disable-next-line */}
                    <a role="menuitem" tabIndex="-1" href="#">
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
              <div
                className={`dropdown ${
                  currentDropdown === "menu5" ? "open" : ""
                }`}
              >
                <button
                  className="btn btn-default dropdown-toggle dropdown-select borderInput"
                  type="button"
                  id="menu5"
                  data-toggle="dropdown"
                  onClick={handleDropdownClick}
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
                    {/* eslint-disable-next-line */}
                    <a role="menuitem" tabIndex="-1" href="#">
                      All Plants
                    </a>
                  </li>
                  <li role="presentation">
                    {/* eslint-disable-next-line */}
                    <a role="menuitem" tabIndex="-1" href="#">
                      ACG Metalcrafts, Shirwal
                    </a>
                  </li>
                  <li role="presentation">
                    {/* eslint-disable-next-line */}
                    <a role="menuitem" tabIndex="-1" href="#">
                      SciTech Centre, Jogeshwari
                    </a>
                  </li>
                  <li role="presentation">
                    {/* eslint-disable-next-line */}
                    <a role="menuitem" tabIndex="-1" href="#">
                      ACG Pharma Technologies, Shirwal
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MapSideFilter;
