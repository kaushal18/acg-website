import data from "./mapData.js";

/**
 * @returns {Promise} marker data
 */
export function getMarkers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}
