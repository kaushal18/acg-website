/**
 * returns filter prameters
 * @param  {Array}  markers array of marker objects
 * @returns {Object}         filter paramertes
 */

export function getDemographics(markers) {
  let countrySet = new Set();
  let stateSet = new Set();

  markers.forEach((marker) => {
    countrySet.add(marker.country);
    stateSet.add(marker.state);
  });

  return {
    countries: [...countrySet],
    states: [...stateSet],
  };
}
