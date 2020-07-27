import data from "./mapData.js";

/**
 * @return {Promise} marker data
 */
export function getMarkers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}
