import React from 'react'
import {List} from 'semantic-ui-react'

class BankItem extends React.Component {
	render(){
		let dist = ((this.props.bank.location.distance) * 0.000621371).toString().slice(0,4)
		return(
			<List.Item>
				<List.Content floated='right'>
					{dist} 
				</List.Content>
				<List.Content floated='left'>
					{this.props.bank.name} 
				</List.Content>
			</List.Item>
		)
	}
}

export default BankItem