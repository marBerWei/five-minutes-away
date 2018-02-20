import React from 'react'
import BankList from './BankList'
import { connect } from 'react-redux'
import { Segment, Icon } from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom'

class BankContainer extends React.Component {
	render(){
		if(this.props.banks.length > 0){
		return(
			<Segment raised>
				<h1>Banks <Icon name="money" size='large'/></h1>
				
				<BankList banks={this.props.banks}/>
			</Segment>
			)
		} else {
		return(
			<Segment raised>
				<h1>Banks <Icon name="money" size='large'/></h1>
				<p>Bummer! <br/> No Banks 5 minutes away....</p>
				<h1><Link to='/'>Try another address</Link></h1>
			</Segment>
		)
		}
	}
}

function mapStateToProps(state) {
  return {
    banks: state.banks
  }
}

export default withRouter(connect(mapStateToProps)(BankContainer))