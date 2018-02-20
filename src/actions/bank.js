export function fetchBanks(ll, walkOrDrive) {
  let dist = walkOrDrive === "walking" ? 322 : 2500
  return function(dispatch) {
  	//convert address to string
    dispatch(fetchingBanks())
    fetch(`https://api.foursquare.com/v2/venues/search?ll=${ll}&client_id=EFQTHVDSAO0XRYYHCW3ZUUR0Z3HRRWZ4YUXJ1G3VKZYATKY1&client_secret=ZFEIUSVWO005JXIGMTXD0DQRKLXLVDPX4YOPQTMC41MYTB0Y&v=20180218&query=bank&radius=${dist}&limit=5`, {
        method: 'get'
       //  headers : { 
       //  'Content-Type': 'application/json',
       //  'Accept': 'application/json'
       // }
        })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.response.venues)
        const banks = json.response.venues
        dispatch(fetchedBanks(banks))
      })
  }
}

function fetchingBanks() {
  return {
    type: "FETCHING_BANKS"
  }
}

function fetchedBanks(banks) {
  return {
    type: "FETCHED_BANKS",
    payload: banks
  }
}
