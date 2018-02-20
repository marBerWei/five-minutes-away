export function setCurrentAddress(str) {
  return {
    type: "CURRENT_ADDRESS",
    payload: str
  }
}

export function setWalkingOrDriving(str) {
  return {
    type: "WALKING_DRIVING",
    payload: str
  }
}

