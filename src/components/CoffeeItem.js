import React from 'react'
import {List} from 'semantic-ui-react'
// import MapModal from './Modal'

class CoffeeItem extends React.Component {
	render(){
		let dist = ((this.props.coffee.location.distance) * 0.000621371).toString().slice(0,4)
		let formattedName = this.props.coffee.name.split(" ").join("+")
		let latLongString = this.props.coffee.location.lat + "," + this.props.coffee.location.lng

		return(
			<List.Item>
				<List.Content floated='right'>
					{dist}
				</List.Content>
				<List.Content floated='left'>
					<List.Header>{this.props.coffee.name}</List.Header>
					<List.Description>{this.props.coffee.location.formattedAddress[0]} </List.Description>
					<List.Description>{this.props.coffee.location.formattedAddress[1]}</List.Description>
				</List.Content>
			</List.Item>
			
		)
	}
}

export default CoffeeItem

//<a href={"https://www.google.com/maps/place/" + formattedName + "@" + latLongString} target="_blank">{this.props.coffee.name} </a>