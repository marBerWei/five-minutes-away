import React from 'react'
import BankItem from './BankItem'
import {List} from 'semantic-ui-react'

const BankList = props => {
	let banks = props.banks.map((bank,i) => {
		return <BankItem key={i} bank={bank}/>
	})
	return(
		<List divided size="massive">
			<List.Item>
				<List.Content floated='right'>
						<h3>Distance(miles)</h3>
					</List.Content>
					<List.Content floated='left'>
						<h3>Names</h3>
					</List.Content>
			</List.Item>
			{banks}
		</List>
	)
}

export default BankList