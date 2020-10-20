import React, { Component, Fragment } from "react";
import { Form } from "react-bootstrap";

class MovieGenreSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { genreList: [] };
  }

  componentDidMount() {
    this.setState({
      genreList: [
        { id: "Action", value: "Action" },
        { id: "Drama", value: "Drama" },
        { id: "Sci-Fi", value: "Sci-Fi" },
        { id: "Adventure", value: "Adventure" },
        { id: "Fantasy", value : "Fantasy"}
      ]
    });
  }

  render() {
    return (
      <Fragment>
        <Form.Control {...this.props} as="select" name={this.props.name}>
          {this.state.genreList.map((g) => (
            <option key={g.id} value={g.id}>
              {g.value}
            </option>
          ))}
        </Form.Control>
      </Fragment>
    );
  }
}

export default MovieGenreSelect;
