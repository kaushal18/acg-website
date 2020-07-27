import React from "react";
import { Marker } from "@react-google-maps/api";
import {
  selectedMarkerSize,
  defaultMarkerSize,
} from "./utils/mapDefaultOptions";
import defaultmarkerIcon from "./icons/marker_dark.svg";
import selectedMarkerIcon from "./icons/selected_marker_dark.svg";

const isMarkerSelected = (current, selected) => {
  if (!selected) return false;
  return (
    current.position.lat === selected.position.lat &&
    current.position.lng === selected.position.lng
  );
};

const CustomMarker = (props) => {
  const { marker, hoveredMarker, setMarkerState } = props;
  const handleMouseOver = () => {
    setMarkerState((prevState) => ({ ...prevState, hovered: marker }));
  };

  const handleMouseOut = () => {
    setMarkerState((prevState) => ({ ...prevState, hovered: null }));
  };

  const handleClick = () => {
    setMarkerState((prevState) => ({ ...prevState, selected: marker }));
  };

  const isSelected = isMarkerSelected(marker, hoveredMarker);
  return (
    <Marker
      position={{
        lat: marker.position.lat,
        lng: marker.position.lng,
      }}
      // marker origin is top left, therefore anchor should be (x/2, y) - bottom center
      icon={{
        url: isSelected ? selectedMarkerIcon : defaultmarkerIcon,
        scaledSize: isSelected
          ? new window.google.maps.Size(
              selectedMarkerSize.width,
              selectedMarkerSize.height
            )
          : new window.google.maps.Size(
              defaultMarkerSize.width,
              defaultMarkerSize.height
            ),
        origin: new window.google.maps.Point(0, 0),
        anchor: isSelected
          ? new window.google.maps.Point(
              selectedMarkerSize.width / 2,
              selectedMarkerSize.height
            )
          : new window.google.maps.Point(
              defaultMarkerSize.width / 2,
              defaultMarkerSize.height
            ),
      }}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />
  );
};

export default CustomMarker;
