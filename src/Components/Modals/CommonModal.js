import React from "react";

class CommonModal extends React.Component {

  state = { show: false };

  showModal = (movieId) => {
    
    if(this.props.isEditModal)
      this.props.onMovieSelect(movieId, this.displayModal);
    else
      this.displayModal();
  };

  displayModal = () =>
  {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
    this.props.onMovieDeselect();
  };

  render() {
    return <> </>;
  }
}

export default CommonModal;
