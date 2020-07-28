import React, { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";

const AppSettings = () => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

  return (
    <div className="wrapper">
      <div className="contentWrap">
        <div className="breadcrumsCls">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                {/* eslint-disable-next-line */}
                <a href="#">Settings</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Application Settings
              </li>
            </ol>
          </nav>
        </div>
        <div className="appSetting">
          <div className="row clshight80">
            <div className="col-md-12">
              <div className="allCenter">
                <label>Change Theme</label>
                <div className="rightDivSet">
                  <div className="form-group form-radio-div">
                    <p>
                      <input
                        type="radio"
                        id="dark"
                        name="radio-group"
                        onChange={(e) => setCurrentTheme(e.target.id)}
                        checked={currentTheme === "dark"}
                      />
                      <label htmlFor="dark">Dark (Default)</label>
                    </p>
                    <p>
                      <input
                        type="radio"
                        id="light"
                        name="radio-group"
                        onChange={(e) => setCurrentTheme(e.target.id)}
                        checked={currentTheme === "light"}
                      />
                      <label htmlFor="light">Light</label>
                    </p>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row clshight80">
            <div className="col-md-12">
              <div className="allCenter">
                <label>Change Language</label>
                <div className="rightDivSet">
                  <div className="dropdown">
                    <button
                      className="btn btn-default dropdown-toggle dropdown-select borderInput"
                      type="button"
                      id="menu1"
                      data-toggle="dropdown"
                    >
                      <span className="drop-text">English (Default)</span>
                      <span className="caret"></span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      role="menu"
                      aria-labelledby="menu1"
                      id="ulmenu1"
                    >
                      <li role="presentation">
                        {/* eslint-disable-next-line */}
                        <a role="menuitem" tabIndex="-1" href="#">
                          All Countries
                        </a>
                      </li>
                      <li role="presentation">
                        {/* eslint-disable-next-line */}
                        <a role="menuitem" tabIndex="-1" href="#">
                          India
                        </a>
                      </li>
                      <li role="presentation">
                        {/* eslint-disable-next-line */}
                        <a role="menuitem" tabIndex="-1" href="#">
                          Germany
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row clshight80">
            <div className="col-md-12">
              <div className="allCenter">
                <label>Change Font Size</label>
                <div className="rightDivSet">
                  <div className="dropdown">
                    <button
                      className="btn btn-default dropdown-toggle dropdown-select borderInput"
                      type="button"
                      id="menu1"
                      data-toggle="dropdown"
                    >
                      <span className="drop-text">Medium (Default)</span>
                      <span className="caret"></span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      role="menu"
                      aria-labelledby="menu1"
                      id="ulmenu1"
                    >
                      <li role="presentation">
                        {/* eslint-disable-next-line */}
                        <a role="menuitem" tabIndex="-1" href="#">
                          All Countries
                        </a>
                      </li>
                      <li role="presentation">
                        {/* eslint-disable-next-line */}
                        <a role="menuitem" tabIndex="-1" href="#">
                          India
                        </a>
                      </li>
                      <li role="presentation">
                        {/* eslint-disable-next-line */}
                        <a role="menuitem" tabIndex="-1" href="#">
                          Germany
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row clshight90">
            <div className="col-md-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSettings;
