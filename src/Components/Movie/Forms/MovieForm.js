import React from "react";
import { Form } from "react-bootstrap";
import MovieGenreSelect from "./MovieGenreSelect";
import { connect } from 'react-redux'



class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditForm: false, movie: { title: "" } };
  }

  componentDidMount() {
    if (this.props.movieid == null) {
      this.setState({ isEditForm: false });
    } else {
      this.setState({ isEditForm: true });
    }
  }

  render() {

    const { fetchedMovie } = (this.state.isEditForm) ? this.props : { fetchedMovie : { genres : Array('')} };

    if(!fetchedMovie && this.state.isEditForm)
      return <>loading</>;

    let movieIdLabel;
    if (this.state.isEditForm) {

      movieIdLabel = (
        <Form.Group>
          <Form.Row>
            <Form.Label row>MOVIE ID</Form.Label>
          </Form.Row>
          <Form.Row>
            <Form.Label row>{this.props.movieid}</Form.Label>
          </Form.Row>
        </Form.Group>
      );
    } else movieIdLabel = null;

    return (
      <>
        {movieIdLabel}
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={fetchedMovie.title} name="title" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Release Date</Form.Label>
          <Form.Control type="date" value={fetchedMovie.release_date} name="date"/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Movie URL</Form.Label>
          <Form.Control type="url" value={fetchedMovie.poster_path} name="url"/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Genre</Form.Label>
          <MovieGenreSelect selectedValue={fetchedMovie.genres[0]} name="genre"/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Overview</Form.Label>
          <Form.Control type="text" value={fetchedMovie.overview} name="overview"/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Runtime</Form.Label>
          <Form.Control type="number" value={fetchedMovie.runtime} name="runtime"/>
        </Form.Group>
      </>
    );
  }
}

function mapStateToProps (state) {

  const { fetchedMovie } = state.movieList;
  
  return { fetchedMovie };
}

export default connect(mapStateToProps, null)(MovieForm);
