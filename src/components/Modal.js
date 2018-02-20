import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class MapModal extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>{this.props.title}</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='large'
      >
        <Modal.Content>
        	<object data={"https://www.google.com/maps/place/Blue+Bottle+Coffee/@40.6873504,-73.9919132"} width="100%" height="500"></object>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}