import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

import Autocomplete from 'react-google-autocomplete'
import { geocodeByAddress} from 'react-places-autocomplete'
import { Dropdown, Input, Button, Header, Image, Grid } from 'semantic-ui-react';
import { fetchBanks } from './../actions/bank'
import { fetchCoffee } from './../actions/coffee'
import { setCurrentAddress, setCurrentLatLong } from './../actions/address'
import { connect } from 'react-redux'


class GoogleMaps extends Component {
  constructor(){
    super()

    this.state = {
      currentAddress: '',
      currentLocation: {
        lat: null,
        lng: null
      }
    }

    this.handleCurrentAddress = this.handleCurrentAddress.bind(this);
    this.handleSubmitCurrentLocation = this.handleSubmitCurrentLocation.bind(this);
    this.handleGeoCode = this.handleGeoCode.bind(this);
  }

  handleCurrentAddress (event) {
    event.preventDefault();
    this.setState({currentAddress: event.target.value});
    // 	console.log(latlongStr)
  }

  handleGeoCode (event) {
  	event.preventDefault()
  	geocodeByAddress(this.state.currentAddress, (err, latLng) => {
      if(err) {
        console.log('Error with geocoding: ', err);
      } else {
        console.log('Lat and Lng obtained: ', latLng.lat, latLng.lng);
        this.setState({currentLocation:{lat:latLng.lat, lng:latLng.lng}});
      }
      
    })
    .then(el => this.handleSubmitCurrentLocation())
    .then(el => console.log(typeof this.state.currentAddress))

    //this.handleSubmitCurrentLocation(event)
  }

///////////////////////////// Geocodes location to give lat and lng and runs loadMap ///////////////////////////////
///////////////////////////// Need to control submit occurring before place selected ///////////////////////////////

  handleSubmitCurrentLocation() {
    // event.preventDefault();
    
    //fetch coffee/banks based on address using this.state.currentAdress
    //at end of fetch, update the payload have cofee/banks
    //add the state to the payload and make it the currentAddress in redux
    console.log(this.state)
    //this.props.setCurrentLatLong(latlongStr)
    //this.props.setCurrentAddress(this.state.currentAddress)
    let latlongStr = this.state.currentLocation.lat.toString() + "," + this.state.currentLocation.lng.toString()
    console.log(latlongStr)
    this.props.fetchBanks(latlongStr)
   	this.props.fetchCoffee(latlongStr)
    
  }

//////////////////////////////////// Search Bar to render coordinates ///////////////////////////////

  render() {
    return (
      <div style={{textAlign:'center'}}>
        <form onSubmit={this.handleGeoCode}>
          <Input placeholder="Enter Your Location">
            <Autocomplete
              style={{width: 600}}
              onChange={this.handleCurrentAddress}
              // onSubmit={}
              onPlaceSelected={(place) => {
                console.log(place);
                this.setState({currentAddress: place.formatted_address});
              }}
              types={['address']}
              componentRestrictions={{country: "USA"}}
            />
          </Input>
          <Button>Submit</Button>
        </form>
        <br/>

      </div>
    );
  }

}


function mapStateToProps(state) {
  return {
    latlong: state.latlong
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBanks: (address) => {
      dispatch(fetchBanks(address))
    },
    fetchCoffee: (address) => {
      dispatch(fetchCoffee(address))
    },
    setCurrentLatLong: (str)=> {
    	dispatch(setCurrentLatLong(str))
    },
    setCurrentAddress: (str)=> {
    	dispatch(setCurrentAddress(str))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMaps)


// When we have more services
// fluid search selection options={ServiceOptions}