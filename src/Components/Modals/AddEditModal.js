import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { PencilFill } from "react-bootstrap-icons";
import CommonModal from "./CommonModal";
import { connect } from 'react-redux'
import { fetchMovieAsync, clearFetchedMovie, saveMovieAsync } from "../../Core/Actions/actionCreators"
import ErrorBoundary from "../../Containers/Error/ErrorBoundary"

class AddEditModal extends CommonModal {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    buttonText: PropTypes.string.isRequired
  };

  static defaultProps = {
    buttonText: "Click Me !"
  };

  handleSubmit(event){
    event.preventDefault();
    const data = new FormData(event.target);
    
    debugger;
    var s = {
      isUpdate : Boolean(this.props.isEditModal),
      movieId : this.props.movieId,
      title : data.get('title'),
      date : data.get('date'),
      genre : data.get('genre'),
      overview : data.get('overview'),
      runtime : data.get("runtime"),
      imgUrl : data.get("url")
    };

    this.props.onMovieSave(s);
    
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
          onClick={ () => this.showModal(this.props.movieId)}
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
          <ErrorBoundary>
            <Form onSubmit={this.handleSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>{this.props.header}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{this.props.children}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.hideModal}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Save Changes
                </Button>
              </Modal.Footer>
            </Form>
          </ErrorBoundary>
        </Modal>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onMovieSelect: (id, callback) => fetchMovieAsync(id, dispatch, callback),
    onMovieDeselect : () => dispatch(clearFetchedMovie()),
    onMovieSave : (data) => saveMovieAsync(data, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AddEditModal)

