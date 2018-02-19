import React from 'react'
import CoffeeList from './CoffeeList'
import { connect } from 'react-redux'
import { Segment} from 'semantic-ui-react'

class CoffeeContainer extends React.Component {

	render(){
		console.log(this.props.coffee)
		return(
			<Segment>
				<h1>Coffee</h1>
				<br/>
				<CoffeeList coffee={this.props.coffee}/>
			</Segment>
		)
	}
}
function mapStateToProps(state) {
  return {
    coffee: state.coffee
  }
}

export default connect(mapStateToProps)(CoffeeContainer)