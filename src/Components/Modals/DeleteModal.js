import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import CommonModal from "./CommonModal";

class DeleteModal extends CommonModal {
  constructor(props) {
    super(props);
    this.confirmClick = this.confirmClick.bind(this);
  }

  confirmClick() {
    this.hideModal();
  }

  render() {
    return (
      <>
        <Button
          size="sm"
          type="button"
          variant="primary"
          onClick={this.showModal}
        >
          <Trash />
        </Button>
        <Modal show={this.state.show} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure to delete this movie ?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.confirmClick}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default DeleteModal;
