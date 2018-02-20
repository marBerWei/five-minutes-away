import React from 'react'
import CoffeeList from './CoffeeList'
import { connect } from 'react-redux'
import { Segment, Icon} from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
class CoffeeContainer extends React.Component {

	render(){
		if(this.props.coffee.length > 0){
		return(
			<Segment raised>
				<h1>Coffee <Icon name="coffee" size='large'/></h1>

				<CoffeeList coffee={this.props.coffee}/>
			</Segment>
		)
	} else {
		return(
			<Segment raised>
				<h1>Coffee <Icon name="coffee" size='large'/></h1>
				<p>Oh man! <br/> No coffee shops 5 minutes away....</p>
				<h1><Link to='/'>Try another address</Link></h1>
			</Segment>)
	}
	}
}
function mapStateToProps(state) {
  return {
    coffee: state.coffee
  }
}

export default withRouter(connect(mapStateToProps)(CoffeeContainer))