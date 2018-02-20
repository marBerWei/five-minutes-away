import React from 'react'
import { Segment, Divider, Label } from 'semantic-ui-react'
import BankContainer from './BankContainer'
import CoffeeContainer from './CoffeeContainer'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
class EverythingContainer extends React.Component {

	componentDidMount(){
		if(!(this.props.address)){
			this.props.history.push('/')
			console.log('hitting this')
		}
	}
	
	render(){
	let verb = this.props.walkingOrDriving === "walking" ? "walk" : "drive"
	return(
			<div id="everythingContainer">
				<p>Top Results: 5 min <em><b>{this.props.walkingOrDriving}</b></em> distance from <br/> {this.props.address}</p>
				<Segment.Group horizontal >
					<BankContainer/>
					<Divider/>
					<CoffeeContainer/>
				</Segment.Group>
			</div>
		
	)
}
}

function mapStateToProps(state) {
  return {
    address: state.address,
    walkingOrDriving: state.walkingOrDriving
  }
}

export default withRouter(connect(mapStateToProps)(EverythingContainer))