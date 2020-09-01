import React from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

class CommonModal extends React.Component {
  state = { show: false };

  constructor(props) {
    super(props);
    this.saveClick = this.saveClick.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  saveClick() {
    this.hideModal();

    this.props.onSave();
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.showModal}>
          Launch demo modal
        </Button>
        {this.props.button}
        <Modal show={this.state.show} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.header}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.modalForm}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideModal}>
              Close
            </Button>
            <Button variant="primary" onClick={this.saveClick}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

CommonModal.propTypes = {
  onSave: PropTypes.func
};

export default CommonModal;
