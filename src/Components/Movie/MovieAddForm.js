import React from "react";
import { Form } from "react-bootstrap";

class MovieAddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      genders: ["Action", "Drama", "Sci-Fi"]
    };
  }

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Release Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Movie URL</Form.Label>
          <Form.Control type="url" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Genre</Form.Label>
          <Form.Control as="select">
            {this.state.genders.map((gen) => (
              <option>{gen}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Overview</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Runtime</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
      </Form>
    );
  }
}

export default MovieAddForm;
