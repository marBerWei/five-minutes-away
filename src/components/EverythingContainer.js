import React from 'react'
import { Segment, Divider, Label } from 'semantic-ui-react'
import BankContainer from './BankContainer'
import CoffeeContainer from './CoffeeContainer'
import {connect} from 'react-redux'
const EverythingContainer = props => {
	
	let verb = props.walkingOrDriving === "walking" ? "walk" : "drive"
	return(
			<div id="everythingContainer">
				<p>Top Results: 5 min <em><b>{props.walkingOrDriving}</b></em> distance from <br/> {props.address}</p>
				<Segment.Group horizontal >
					<BankContainer/>
					<Divider/>
					<CoffeeContainer/>
				</Segment.Group>
			</div>
		
	)
}

function mapStateToProps(state) {
  return {
    address: state.address,
    walkingOrDriving: state.walkingOrDriving
  }
}

export default connect(mapStateToProps)(EverythingContainer)