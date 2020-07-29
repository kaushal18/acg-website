import React from "react";
import fillIcon from "../images/filterFill.png";
import notFillIcon from "../images/filterNotFill.png";

const MachineSideFilter = (props) => {
  const { filterVisible, setFilterVisible } = props;

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
                    <a role="menuitem" tabIndex="-1" href="/">
                      All Countries
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
                      India
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
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
                    <a role="menuitem" tabIndex="-1" href="/">
                      All States
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
                      Maharashtra
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
                      Nordrhein-Westfalen
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
                      Sikkim
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
                      Goa
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
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
                    <a role="menuitem" tabIndex="-1" href="/">
                      All Machine Families
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
                      Blister Packaging
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
                      Tablet Press
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
                      Granulation
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
                      Verishield
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
                      Cartoning
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
                      Verishield
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
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
                    <a role="menuitem" tabIndex="-1" href="/">
                      All Organization
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
                      ACG Metalcrafts pvt ltd
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
                      SciTech Centre
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
                      ACG Pharma Technologies
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
                      Pmec-2019
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
                      Vantage Nutrition LLP
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
                      GLENMARK PHARMACEUTICALS LTD
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
                      GLENMARK PHARMACEUTICALS LIMITED
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
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
                    <a role="menuitem" tabIndex="-1" href="/">
                      All Plants
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
                      ACG Metalcrafts, Shirwal
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
                      SciTech Centre, Jogeshwari
                    </a>
                  </li>
                  <li role="presentation">
                    <a role="menuitem" tabIndex="-1" href="/">
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

export default MachineSideFilter;
