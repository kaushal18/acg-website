/**
 * returns count of each machine state (marker)
 * @param  {Array}  markers
 * @return {Object} markerCount
 */

function getCount(markers) {
  let markerCount = {
    all: markers.length,
    critical: 0,
    amc: 0,
  };

  markers.forEach((marker) => {
    if (!marker.isOnline) markerCount.critical++;
    else markerCount.amc++;
  });

  return markerCount;
}

/**
 * returns filtered marker array and count
 * @param  {String} displayedMachines
 * @param  {Array}  markers
 * @return {Object} object consisting of filtered markers, counts
 */
export function getFilteredMarkers(displayedMachines, markers) {
  let filteredMarkers = [...markers];

  if (displayedMachines === "criticalMachine") {
    filteredMarkers = markers.filter((marker) => !marker.isOnline);
  } else if (displayedMachines === "amcMachine") {
    filteredMarkers = markers.filter((marker) => marker.isOnline);
  }

  return { filteredMarkers, markerCount: getCount(markers) };
}
