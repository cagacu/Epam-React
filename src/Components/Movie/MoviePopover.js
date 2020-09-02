/*import React from "react";
import { Popover, OverlayTrigger, Button, Row, Col } from "react-bootstrap";
import ErrorBoundary from "../../Containers/Error/ErrorBoundary";
import CommonModal from "../Modals/CommonModal";
import MovieForm from "../Movie/Forms/MovieForm";

class PopoverContent extends React.Component {
  constructor(props) {
    super(props);
    this.showEditManually = this.showEditManually.bind(this);
  }

  showModal = () => {};

  showEditManually = () => {
    this.showModal();
  };

  render() {
    return (
      <>
        <Popover id="popover-trigger-focus" {...this.props}>
          <Popover.Content>
            <Row>
              <Col>
                <Button variant="dark" onClick={this.showEditManually}>
                  Edit
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="dark">Delete</Button>
              </Col>
            </Row>
          </Popover.Content>
        </Popover>
      </>
    );
  }
}

class PopoverButton extends React.Component {
  render() {
    const popoverFocus = (
      <PopoverContent
        id="tooltip-trigger-focus"
        title="My Title"
        movieid={this.props.movieId}
      ></PopoverContent>
    );

    return (
      <>
        <div className="threedots">
          <OverlayTrigger
            trigger="click"
            placement="right"
            overlay={popoverFocus}
          >
            <Button variant="secondary">...</Button>
          </OverlayTrigger>
        </div>
      </>
    );
  }
}
export default PopoverButton;
*/
