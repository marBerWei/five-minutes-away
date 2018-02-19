import React from 'react'
import BankList from './BankList'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'

class BankContainer extends React.Component {
	render(){
		return(
			<Segment>
				<h1>Banks</h1>
				<br/>
				<BankList banks={this.props.banks}/>
			</Segment>
		)
	}
}

function mapStateToProps(state) {
  return {
    banks: state.banks
  }
}

export default connect(mapStateToProps)(BankContainer)