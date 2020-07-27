import React, { useState, useEffect, useMemo } from "react";
import Map from "../../map/Map";
import BottomFilter from "./BottomFilter";
import MapSideFilter from "./MapSideFilter";
import RightMachinePanel from "./RightMachinePanel";
import { getMarkers } from "../../../services/mapService";
import { getFilteredMarkers } from "../../../services/markerFilterService";
import { getDemographics } from "../../../services/demographicService";

const LiveMapTracking = (props) => {
  const [markers, setMarkers] = useState([]);
  const [mapRef, setMapRef] = useState(null);
  const [googleRef, setGoogleRef] = useState(null);
  const [displayedMachines, setDisplayedMachnies] = useState("allMachine");

  // current hovered or selected marker
  const [markerState, setMarkerState] = useState({
    hovered: null,
    selected: null,
  });

  // side filter parameters
  const [filterState, setFilterState] = useState({ content: null });

  useEffect(() => {
    // handle memory leak
    getMarkers()
      .then((data) => {
        setMarkers(data);
        setFilterState((prevState) => ({
          ...prevState,
          content: getDemographics(data),
        }));
      })
      .catch((err) => console.error(err));

    return () => {
      setMapRef(null);
      setGoogleRef(null);
    };
  }, []);

  // filter markers
  const { filteredMarkers, markerCount } = useMemo(
    () => getFilteredMarkers(displayedMachines, markers),
    [displayedMachines, markers]
  );

  return (
    <React.Fragment>
      <div className="contentPart">
        <MapSideFilter
          filterState={filterState}
          mapRef={mapRef}
          googleRef={googleRef}
          {...props}
        />

        <div
          className={`mapDiv ${props.filterVisible ? "" : "expandMapWidth"}`}
        >
          <Map
            markers={filteredMarkers}
            markerState={markerState}
            setMarkerState={setMarkerState}
            setMapRef={setMapRef}
            setGoogleRef={setGoogleRef}
          />
        </div>

        <div
          // prettier-ignore
          className={`machineListDiv ${markerState.selected ? "widthListView" : "widthZero"}`}
        >
          <RightMachinePanel
            selectedMarker={markerState.selected}
            setMarkerState={setMarkerState}
          />
        </div>
      </div>
      <div className="machineStatus">
        <BottomFilter
          displayedMachines={displayedMachines}
          setDisplayedMachnies={setDisplayedMachnies}
          markerCount={markerCount}
        />
      </div>
    </React.Fragment>
  );
};

export default LiveMapTracking;
