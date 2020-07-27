import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import CustomMarker from "./CustomMarker";
import MarkerInfoWindow from "./MarkerInfoWindow";
import { containerStyle, center, mapOptions } from "./utils/mapDefaultOptions";
import "./styles/map.css";

const Map = (props) => {
  const {
    markers,
    markerState,
    setMarkerState,
    setMapRef,
    setGoogleRef,
  } = props;

  const saveReferences = (map) => {
    setMapRef(map);
    setGoogleRef(window.google);
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return <h1>error loading maps, open console!</h1>;
  if (!isLoaded) return "Loading...";

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={2}
      center={center}
      options={mapOptions}
      onLoad={saveReferences}
    >
      {markers.map((marker) => (
        <CustomMarker
          key={marker.id}
          marker={marker}
          hoveredMarker={markerState.hovered}
          setMarkerState={setMarkerState}
        />
      ))}
      {markerState.hovered && <MarkerInfoWindow marker={markerState.hovered} />}
    </GoogleMap>
  );
};

export default Map;
