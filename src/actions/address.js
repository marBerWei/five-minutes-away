export function setCurrentAddress(str) {
  return {
    type: "CURRENT_ADDRESS",
    payload: str
  }
}