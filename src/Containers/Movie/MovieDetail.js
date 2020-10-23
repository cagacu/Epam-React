import React from "react";
import { Search } from "react-bootstrap-icons";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";



function MovieDetail(props) {
  const handleOnClose = () => {
    props.onReset(-1);
  };

  return (
    <Container>
      <Row>
        <Col><img src={props.selectedMovie.poster_path} alt={props.selectedMovie.title} /></Col>
        <Col>
          <Row>
            <Col>
              <span className="detailsTitleSpan">{props.selectedMovie.title}</span>
            </Col>
            </Row>
            <Row>
              <Col>
              <span className="detailsRatingSpan">{props.selectedMovie.vote_average}</span>
            </Col>
          </Row>
          <Row>
              <Col>
              <span className="detailsRatingSpan">{props.selectedMovie.release_date}</span>
            </Col>
          </Row>
          <Row>
              <Col>
              <span className="detailsRatingSpan">{props.selectedMovie.runtime}</span>
            </Col>
          </Row>
          <Row>
              <Col>
              <span className="detailsRatingSpan">{props.selectedMovie.overview}</span>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/">Go Back</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetail;
