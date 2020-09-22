import React from "react";
import { Form } from "react-bootstrap";
import MovieGenreSelect from "./MovieGenreSelect";
import ErrorBoundary from "../../../Containers/Error/ErrorBoundary";
import fetchMovie from "../../../Core/Actions/actionCreators";
import connect from "react-redux/lib/connect/connect";

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

      //var m = this.props.dispatch(fetchMovie(this.props.movieid));
      
      //console.log("EDIT >>>", m);

      this.setState({
        movie: {
          id: "123",
          title: "SampleMovie",
          releaseDate: "2019-12-01",
          url: "samplemovie.com",
          genre: 3,
          overview: "sample overview",
          runtime: 2020
        }

      });
    }
  }

  render() {
    let movieIdLabel;
    if (this.state.isEditForm) {
      movieIdLabel = (
        <Form.Group>
          <Form.Row>
            <Form.Label row>MOVIE ID</Form.Label>
          </Form.Row>
          <Form.Row>
            <Form.Label row>{this.state.movie.id}</Form.Label>
          </Form.Row>
        </Form.Group>
      );
    } else movieIdLabel = null;

    return (
      <ErrorBoundary>
        <Form>
          {movieIdLabel}
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={this.state.movie.title} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Release Date</Form.Label>
            <Form.Control type="date" value={this.state.movie.releaseDate} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Movie URL</Form.Label>
            <Form.Control type="url" value={this.state.movie.url} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Genre</Form.Label>
            <MovieGenreSelect selectedValue={this.state.movie.genre} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Overview</Form.Label>
            <Form.Control type="text" value={this.state.movie.overview} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Runtime</Form.Label>
            <Form.Control type="number" value={this.state.movie.runtime} />
          </Form.Group>
        </Form>
      </ErrorBoundary>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  getMovie : se => dispatch(fetchMovie(se))
})

// const mapSortStateToProps = (state) => ({
//   selectedSortBy : getSelectedSortBy(state.movieList.sortBy)
// })

export default connect(null, mapDispatchToProps)(MovieForm);
