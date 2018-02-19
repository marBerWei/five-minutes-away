function setCurrentAddress(address_string) {
  return {
    type: "CURRENT_ADDRESS",
    payload: address_string
  }
}

function setCurrentLatLong(latlong_string) {
  return {
    type: "CURRENT_LATLONG",
    payload: latlong_string
  }
}