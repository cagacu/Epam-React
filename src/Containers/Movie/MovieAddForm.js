import React from "react";
import { Form, Button } from "react-bootstrap";

class MovieAddForm extends React.Component {
  onSave() {}

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
            <option>select 1</option>
            <option>select 2</option>
            <option>select 3</option>
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
