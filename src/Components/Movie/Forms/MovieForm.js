import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import MovieGenreSelect from "./MovieGenreSelect";
import { connect } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from "formik";

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditForm: false, movie: { title: "" } };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  parentSubmit = (s) =>
  {
    this.props.parentOnClick(s);
  }

  parentClose =() =>
  {
    this.props.parentOnClose();
  }



  componentDidMount() {
    if (this.props.movieid == null) {
      this.setState({ isEditForm: false });
    } else {
      this.setState({ isEditForm: true });
    }
  }

  handleSubmit(values, {setSubmitting}) {
    var s = {
      isUpdate : Boolean(this.state.isEditForm),
      movieId : this.props.movieid,
      title : values.title,
      date : values.date,
      genre : values.genre,
      overview : values.overview,
      runtime : values.runtime,
      imgUrl : values.url
    };

    this.parentSubmit(s);

    setSubmitting(false);

    return;
  }

  validate(values){
    
    let errors = {};
    if (values.title === "") {
      errors.title = "Title is required!";
    } 
    if (values.date === "") {
      errors.date = "Date is required!";
    } 
    if (values.url === "") {
      errors.url = "Url is required!";
    }
    if (values.genre === "") {
      errors.url = "Genre is required!";
    }
    if(values.overview === "")
    {
      errors.overview = "Overview is required!";
    }
    if(values.runtime === "")
    {
      errors.runtime = "Runtime is required!";
    }

    return errors;
  }

  render() {
    const { fetchedMovie } = (this.state.isEditForm) ? this.props : { fetchedMovie : { genres : Array('')} };

    if(!fetchedMovie && this.state.isEditForm)
      return <>loading</>;

    let movieIdLabel;
    if (this.state.isEditForm) {

      movieIdLabel = (
        <>
          <Row className="formRow">
            <Col>
              <span>MOVIE ID</span>
            </Col>
            <Col>
            <span>{this.props.movieid}</span>
            </Col>
          </Row>
        </>
      );
    } else movieIdLabel = null;

    return(
      <Formik 
              initialValues={{ 
                title: fetchedMovie.title, 
                date: fetchedMovie.release_date, 
                url:fetchedMovie.poster_path, 
                genre:fetchedMovie.genres[0], 
                overview:fetchedMovie.overview, 
                runtime:fetchedMovie.runtime  
              }} 
              validate={this.validate}
              onSubmit={this.handleSubmit}
              >
        {({ touched, errors, isSubmitting }) => (
          <Form>
            <Container>
              {movieIdLabel}
              <Row className="formRow">
                <Col>
                  <label htmlFor="title">Title</label>
                </Col>
                <Col>
                  <Field name="title" placeholder="Enter title" className={`form-control ${touched.title && errors.title ? "is-invalid" : ""}`}/>
                  <ErrorMessage component="div" name="title" className="invalid-feedback" />
                </Col>
              </Row>
              <Row className="formRow">
                <Col>
                  <label htmlFor="date">Date</label>
                </Col>
                <Col>
                  <Field name="date" as={Form.Control} type="date" className={`form-control ${touched.date && errors.date ? "is-invalid" : ""}`} />
                  <ErrorMessage component="div" name="date" className="invalid-feedback" />
                </Col>
              </Row>
              <Row className="formRow">
                <Col>
                  <label htmlFor="url">Movie URL</label>
                </Col>
                <Col>
                  <Field name="url" placeholder="Enter URL" className={`form-control ${touched.url && errors.url ? "is-invalid" : ""}`}/>
                  <ErrorMessage component="div" name="url" className="invalid-feedback" />
                </Col>
              </Row>
              <Row className="formRow">
                <Col>
                  <label htmlFor="genre">Genre</label>
                </Col>
                <Col>
                  <Field name="genre" as={MovieGenreSelect} />
                  <ErrorMessage component="div" name="genre" className="invalid-feedback" />
                </Col>
              </Row>
              <Row className="formRow">
                <Col>
                  <label htmlFor="overview">Overview</label>
                </Col>
                <Col>
                  <Field name="overview" placeholder="Enter Overview" className={`form-control ${touched.overview && errors.overview ? "is-invalid" : ""}`}/>
                  <ErrorMessage component="div" name="overview" className="invalid-feedback" />
                </Col>
              </Row>
              <Row className="formRow">
                <Col>
                  <label htmlFor="runtime">Runtime</label>
                </Col>
                <Col>
                  <Field name="runtime" as={Form.Control} type="number" className={`form-control ${touched.runtime && errors.runtime ? "is-invalid" : ""}`}/>
                  <ErrorMessage component="div" name="runtime" className="invalid-feedback" />
                </Col>
              </Row>
              <Row className="formRow">
                <Col>
                </Col>
                <Col>
                  <Button variant="secondary" onClick={this.parentClose}>Close</Button>  
                  <Button variant="primary" type="submit" disabled={isSubmitting} > {isSubmitting ? "Please wait..." : "Submit"}</Button>
                </Col>
              </Row>
            </Container>            
          </Form>
          )}
     </Formik>
    );
  }
}

function mapStateToProps (state) {

  const { fetchedMovie } = state.movieList;
  
  return { fetchedMovie };
}

export default connect(mapStateToProps, null)(MovieForm);
