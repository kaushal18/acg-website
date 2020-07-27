import React, { useState } from "react";
import MachineList from "./MachineList";
import LiveMapTracking from "./LiveMapTracking";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("LiveMapTracking");
  const [filterVisible, setFilterVisible] = useState(true);

  return (
    <div className="wrapper">
      <div className="contentWrap">
        <div className="breadcrumsCls">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                Home
              </li>
            </ol>
          </nav>
        </div>
        <div className="tabArea">
          <ul className="nav nav-tabs tabsName">
            <li
              className={`${selectedTab === "LiveMapTracking" ? "active" : ""}`}
            >
              {/* eslint-disable-next-line */}
              <a
                id="LiveMapTracking"
                data-toggle="tab"
                href="#"
                onClick={(e) => setSelectedTab(e.target.id)}
              >
                Live Map Tracking
              </a>
            </li>
            <li className={`${selectedTab === "MachineList" ? "active" : ""}`}>
              {/* eslint-disable-next-line */}
              <a
                id="MachineList"
                data-toggle="tab"
                href="#"
                onClick={(e) => setSelectedTab(e.target.id)}
              >
                Machine List
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              id="LiveMapTracking"
              // prettier-ignore
              className={`tab-pane fade ${selectedTab === "LiveMapTracking" ? "in active" : ""}`}
            >
              <LiveMapTracking
                filterVisible={filterVisible}
                setFilterVisible={setFilterVisible}
              />
            </div>

            <div
              id="MachineList"
              // prettier-ignore
              className={`tab-pane fade ${selectedTab === "MachineList" ? "in active" : ""}`}
            >
              <MachineList
                filterVisible={filterVisible}
                setFilterVisible={setFilterVisible}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
