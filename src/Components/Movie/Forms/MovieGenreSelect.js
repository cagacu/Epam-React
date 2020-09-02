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
        { id: 1, value: "Action" },
        { id: 2, value: "Drama" },
        { id: 3, value: "Sci-Fi" },
        { id: 4, value: "Adventure" }
      ]
    });
  }

  render() {
    return (
      <Fragment>
        <Form.Control as="select" value={this.props.selectedValue}>
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
