import React from "react";
import { InfoWindow } from "@react-google-maps/api";
import { selectedMarkerSize } from "./utils/mapDefaultOptions";

const MarkerInfoWindow = (props) => {
  const { marker } = props;
  return (
    <InfoWindow
      position={marker.position}
      options={{
        // offset the info window by 4 map units
        pixelOffset: new window.google.maps.Size(
          0,
          -selectedMarkerSize.height - 4
        ),
      }}
    >
      <div className="info-window">
        <span className="info-text">{marker.title}</span>
      </div>
    </InfoWindow>
  );
};

export default MarkerInfoWindow;
