import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { PencilFill } from "react-bootstrap-icons";
import CommonModal from "./CommonModal";
import { connect } from 'react-redux'
import { fetchMovieAsync, clearFetchedMovie, saveMovieAsync } from "../../Core/Actions/actionCreators"
import ErrorBoundary from "../../Containers/Error/ErrorBoundary"
import MovieForm from "../../Components/Movie/Forms/MovieForm";


class AddEditModal extends CommonModal {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  static propTypes = {
    buttonText: PropTypes.string.isRequired
  };

  static defaultProps = {
    buttonText: "Click Me !"
  };

  handleSubmit(s){
    
    alert(">>>"+JSON.stringify(s));

    this.props.onMovieSave(s);
    
    this.hideModal();
  }

  handleClose(){
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
              <Modal.Header closeButton>
                <Modal.Title>{this.props.header}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <MovieForm parentOnClick={this.handleSubmit} parentOnClose={this.handleClose} />
              </Modal.Body>
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

