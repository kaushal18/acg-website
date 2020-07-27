import React from "react";

const BottomFilter = (props) => {
  const { displayedMachines, setDisplayedMachnies, markerCount } = props;

  return (
    <ul className="listMachine">
      <li
        // prettier-ignore
        className={`allMachine comnMachine ${displayedMachines === "allMachine" ? "active" : ""}`}
        onClick={() => setDisplayedMachnies("allMachine")}
      >
        <div className="borderWidth">
          <div className="outercircle">
            <div className="circle">{markerCount.all}</div>
          </div>
        </div>
        <div className="text-center machineName">All Machines</div>
      </li>
      <li
        // prettier-ignore
        className={`criticalMachine comnMachine ${displayedMachines === "criticalMachine" ? "active" : ""}`}
        onClick={() => setDisplayedMachnies("criticalMachine")}
      >
        <div className="borderWidth">
          <div className="outercircle">
            <div className="circle">{markerCount.critical}</div>
          </div>
        </div>
        <div className="text-center machineName">Critical Machines</div>
      </li>
      <li
        // prettier-ignore
        className={`amcMachine comnMachine ${displayedMachines === "amcMachine" ? "active" : ""}`}
        onClick={() => setDisplayedMachnies("amcMachine")}
      >
        <div className="borderWidth">
          <div className="outercircle">
            <div className="circle">{markerCount.amc}</div>
          </div>
        </div>
        <div className="text-center machineName">AMC Due Machines</div>
      </li>
    </ul>
  );
};

export default BottomFilter;
