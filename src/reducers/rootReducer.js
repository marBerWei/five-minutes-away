function rootReducer(
  state = { 
    address: '',
    walkingOrDriving: '',
    coffee: [], 
    banks: []
  }, action) 
  {
  switch (action.type) {
    //walking or driving
    case "WALKING_DRIVING":
      return Object.assign({}, state, { walkingOrDriving: action.payload})
  	//address
    case "CURRENT_ADDRESS":
      return Object.assign({}, state, { address: action.payload})
    //coffee
    case "FETCHED_COFFEE":
      return Object.assign({}, state, { coffee: action.payload})
    case "FETCHING_COFFEE":
      return Object.assign({}, state, { isFetchingCoffee: true})
     //bank
    case "FETCHED_BANKS":
      return Object.assign({}, state, { banks:action.payload})
    case "FETCHING_BANKS":
      return Object.assign({}, state, { isFetchingBanks: true})
    default:
      return state
  }
}


export default rootReducer