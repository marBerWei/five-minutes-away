import React from 'react'
import CoffeeItem from './CoffeeItem'
import {List} from 'semantic-ui-react'

const CoffeeList = props => {
	const coffees = props.coffee.map((coffee,i) => {
		return <CoffeeItem key={i} coffee={coffee} />
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
		 	{coffees}
		</List>
	)
}

export default CoffeeList