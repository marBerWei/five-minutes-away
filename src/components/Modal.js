import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { compose, withProps } from "recompose";



export default class MapModal extends Component {

  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
  	const MyMapComponent = compose(
	  withProps({
	    googleMapURL:
	      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAaxDUM4amBAQ_ppmk5AE4X5nMg4VAwTQg&v=3.exp&libraries=geometry,drawing,places",
	    loadingElement: <div style={{ height: `100%` }} />,
	    containerElement: <div style={{ height: `400px` }} />,
	    mapElement: <div style={{ height: `100%` }} />
	  }),
	  withScriptjs,
	  withGoogleMap
	)(props => (
	  <GoogleMap defaultZoom={15} defaultCenter={{ lat: this.props.location.lat, lng: this.props.location.lng }}>
	    <Marker position={{ lat: this.props.location.lat, lng: this.props.location.lng }} />
	  </GoogleMap>
	))	
    return (
      <Modal
        trigger={<Icon style={{color:'rgb(255,202,98)'}} size="large" name='map' onClick={this.handleOpen}/>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='large'
      >
        <Modal.Content object>
        	<MyMapComponent/>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

// <object data={"https://www.google.com/maps/place/Blue+Bottle+Coffee/@40.6873504,-73.9919132"} width="100%" height="500"></object>