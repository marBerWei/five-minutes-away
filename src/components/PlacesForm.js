import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Autocomplete from 'react-google-autocomplete'
import { geocodeByAddress} from 'react-places-autocomplete'
import { Input, Button, Form, Label} from 'semantic-ui-react';
import { fetchBanks } from './../actions/bank'
import { fetchCoffee } from './../actions/coffee'
import { setCurrentAddress, setWalkingOrDriving } from './../actions/address'
import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";



class GoogleMaps extends Component {

    state = {
      currentAddress: '',
      currentLocation: {
        lat: null,
        lng: null
      },
      clicked: { 
        
      }
    }


  handleCurrentAddress = (event) => {
    event.preventDefault();
    this.setState({currentAddress: event.target.value});
    // 	console.log(latlongStr)
  }

  handleGeoCode = (event) => {
  	event.preventDefault()
    let walkOrDrive = Object.keys(this.state.clicked)[0]
  	geocodeByAddress(this.state.currentAddress, (err, latLng) => {
      if(err) {
        console.log('Error with geocoding: ', err);
      } else {
        console.log('Lat and Lng obtained: ', latLng.lat, latLng.lng);
        this.setState({currentLocation:{lat:latLng.lat, lng:latLng.lng}});
      }
      
    })
    .then(el => this.handleSubmitCurrentLocation(walkOrDrive))
  }

///////////////////////////// Geocodes location to give lat and lng and runs loadMap ///////////////////////////////
///////////////////////////// Need to control submit occurring before place selected ///////////////////////////////

  handleSubmitCurrentLocation = (walkOrDrive) => {
    var currAdd = this.state.currentAddress
    let latlongStr = this.state.currentLocation.lat.toString() + "," + this.state.currentLocation.lng.toString()
    console.log(this.props)
    this.props.fetchBanks(latlongStr, walkOrDrive)
   	this.props.fetchCoffee(latlongStr, walkOrDrive)
    this.props.setCurrentAddress(currAdd)
    this.props.setWalkingOrDriving(Object.keys(this.state.clicked)[0])
    this.props.history.push("/results")
  }

  handleWalking = (e) =>{
    e.preventDefault()
    this.state.clicked.walking ? this.setState({clicked: {walking: false}}) : this.setState({clicked: {walking: true}}) 
    console.log('walking',this.state.clicked.walking)
  }

  handleDriving = (e) =>{
    e.preventDefault()
    this.state.clicked.driving ? this.setState({clicked: {driving: false}}) : this.setState({clicked: {driving: true}}) 
    console.log('driving',this.state.clicked.driving)
  }


//////////////////////////////////// Search Bar to render coordinates ///////////////////////////////

  render() {
    return (
        <div>
        <p>Check for banks and coffee shops under 
          <br/>five minutes from anywhere
        </p>
        <p>Select One:</p>
        <Form onSubmit={this.handleGeoCode}>
          <Form.Group grouped>
            <Form.Checkbox slider onClick={this.handleWalking} style={{fontSize: 30}} label='Walking' />
            <Form.Checkbox slider onClick={this.handleDriving} style={{fontSize: 30}} label='Driving' />
          </Form.Group>
          <br/>
          <Form.Group>
            <Form.Input size="massive" placeholder="Enter Your Location">
              <Autocomplete
                style={{width: 500}}
                onChange={this.handleCurrentAddress}
                // onSubmit={}
                onPlaceSelected={(place) => {
                  console.log(place);
                  this.setState({currentAddress: place.formatted_address})
                }}
                types={['address']}
                componentRestrictions={{country: "USA"}}
              />
            </Form.Input>
          </Form.Group>
          <Form.Button style={{backgroundColor: `rgb(255,202,98)`}} size="massive">Submit</Form.Button>
        </Form>
        </div>
    );
  }

}


function mapDispatchToProps(dispatch) {
  return {
    fetchBanks: (address, walkOrDrive) => {
      dispatch(fetchBanks(address, walkOrDrive))
    },
    fetchCoffee: (address, walkOrDrive) => {
      dispatch(fetchCoffee(address, walkOrDrive))
    },
    setCurrentAddress: (str)=> {
    	dispatch(setCurrentAddress(str))
    },
    setWalkingOrDriving: (str)=> {
      dispatch(setWalkingOrDriving(str))
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(GoogleMaps))


// When we have more services
// fluid search selection options={ServiceOptions}