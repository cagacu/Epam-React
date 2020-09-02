import React from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { PencilFill } from "react-bootstrap-icons";
import CommonModal from "./CommonModal";

class AddEditModal extends CommonModal {
  constructor(props) {
    super(props);
    this.saveClick = this.saveClick.bind(this);
  }

  static propTypes = {
    buttonText: PropTypes.string.isRequired
  };

  static defaultProps = {
    buttonText: "Click Me !"
  };

  saveClick() {
    this.hideModal();
  }

  render() {
    let triggerButton;
    if (this.props.isEditModal) {
      triggerButton = (
        <Button
          size="sm"
          type="button"
          variant="primary"
          onClick={this.showModal}
        >
          <PencilFill />
        </Button>
      );
    } else {
      triggerButton = (
        <Button
          size="lg"
          as="input"
          type="button"
          value={this.props.buttonText}
          variant="primary"
          onClick={this.showModal}
        ></Button>
      );
    }

    return (
      <>
        {triggerButton}
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

export default AddEditModal;
