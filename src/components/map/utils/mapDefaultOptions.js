import mapStyles from "../styles/mapStyles_dark";

export const containerStyle = {
  width: "100%",
  height: "96%",
};

export const center = {
  lat: 22.808,
  lng: 12.492,
};

export const mapOptions = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  gestureHandling: "greedy",
};

export const selectedMarkerSize = { height: 36, width: 30 };
export const defaultMarkerSize = { height: 24, width: 18 };
