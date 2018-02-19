import React from 'react'
import {List} from 'semantic-ui-react'

class CoffeeItem extends React.Component {
	render(){
		let dist = ((this.props.coffee.location.distance) * 0.000621371).toString().slice(0,4)
		return(
			<List.Item>
				<List.Content floated='center'>
					{dist} 
				</List.Content>
				<List.Content floated='right'>
					{this.props.coffee.name}
				</List.Content>
			</List.Item>
			
		)
	}
}

export default CoffeeItem