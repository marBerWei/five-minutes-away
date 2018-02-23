export function fetchCoffee(ll, walkOrDrive) {
  let dist = walkOrDrive === "walking" ? 322 : 2500
  return function(dispatch) {
    dispatch(fetchingCoffee())
    fetch(`https://api.foursquare.com/v2/venues/search?ll=${ll}&client_id=EFQTHVDSAO0XRYYHCW3ZUUR0Z3HRRWZ4YUXJ1G3VKZYATKY1&client_secret=ZFEIUSVWO005JXIGMTXD0DQRKLXLVDPX4YOPQTMC41MYTB0Y&v=20180218&query=coffee&radius=${dist}&limit=5`, {
        method: 'get',
        })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.response.venues)
        const coffee = json.response.venues
        dispatch(fetchedCoffee(coffee))
      })
  }
}

function fetchingCoffee() {
  return {
    type: "FETCHING_COFFEE"
  }
}

function fetchedCoffee(coffee) {
  return {
    type: "FETCHED_COFFEE",
    payload: coffee
  }
}