import React from 'react'
import { Segment, Divider, Label } from 'semantic-ui-react'
import BankContainer from './BankContainer'
import CoffeeContainer from './CoffeeContainer'

const EverythingContainer = props => {
	return(
			<div id="everythingContainer">
				<Segment.Group horizontal>
					<BankContainer/>
					<CoffeeContainer/>
				</Segment.Group>
			</div>
		
	)
}

export default EverythingContainer