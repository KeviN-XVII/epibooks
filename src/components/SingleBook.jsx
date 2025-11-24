import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea.jsx";

class SingleBook extends Component {
  render() {
    const { book } = this.props;
    return (
      <>
        <Col
          key={book.asin}
          md={4}
          lg={3}
          sm={6}
          xs={12}
          className="mb-4 d-flex justify-content-center"
        >
          <div className="d-flex flex-column align-items-center">
            <Card
              style={{ width: "18rem" }}
              className={
                this.props.selectedAsin === book.asin
                  ? "border border-3 border-warning"
                  : ""
              }
              onClick={() => this.props.onSelectBook(book.asin)}
            >
              <Card.Img
                variant="top"
                src={book.img}
                className="w-100 object-fit-cover"
                style={{ height: "450px" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{book.title}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {book.category} - {book.price}€
                </Card.Text>
                <Button variant="warning">ACQUISTA</Button>
              </Card.Body>
            </Card>
            {/* {this.state.selected && <CommentArea asin={book.asin} />} */}
          </div>
        </Col>
      </>
    );
  }
}

export default SingleBook;
