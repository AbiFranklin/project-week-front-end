import React, { Component } from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'

class DeleteModal extends Component {
  state = { open: false }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  close = () => this.setState({ open: false })

  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state

    return (
      <div>
        <Icon name='delete' color='red' onClick={this.closeConfigShow(false, true)} />
        

        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
          basic
        >
          <Modal.Header>Delete Note</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete this note?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              No
            </Button>
            <Button
              onClick={(id) => {this.props.deleteOne(`${this.props.id}`)}}
              positive
              labelPosition='right'
              icon='checkmark'
              content='Yes'
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default DeleteModal