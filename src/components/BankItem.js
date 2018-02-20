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
					<List.Header>{this.props.bank.name}</List.Header>
					<List.Description>{this.props.bank.location.formattedAddress[0]}</List.Description>
					<List.Description>{this.props.bank.location.formattedAddress[1]}</List.Description>
				</List.Content>
			</List.Item>
		)
	}
}

export default BankItem