import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import CommonModal from "./CommonModal";
import { connect } from 'react-redux'
import { deleteMovieAsync, clearFetchedMovie} from "../../Core/Actions/actionCreators" 

class DeleteModal extends CommonModal {
  constructor(props) {
    super(props);
    this.confirmClick = this.confirmClick.bind(this);
  }

  confirmClick(event) {
    event.preventDefault();

    this.props.onMovieDelete(this.props.movieId);

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


const mapDispatchToProps = dispatch => {
  return {
    onMovieDelete: (id) => deleteMovieAsync({ movieId : id }, dispatch),
    onMovieDeselect : () => dispatch(clearFetchedMovie()),
  }
}

export default connect(null, mapDispatchToProps)(DeleteModal)
