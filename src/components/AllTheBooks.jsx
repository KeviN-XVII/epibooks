import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Books from '../horror.json';
import { Container, Row, Col } from 'react-bootstrap'

function AllTheBooks() {
  return (
    <>
    <Container className="my-4">
        <Row className="justify-content-center">
    {
        Books.map((book) => {
            return (
                <Col key={book.asin} md={4} lg={3} sm={6} xs={12} className="mb-4 d-flex justify-content-center">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={book.img} className="w-100 object-fit-cover" style={{ height: "450px" }}/>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{book.title}</Card.Title>
        <Card.Text className="flex-grow-1" >
            {book.category} - {book.price}€
        </Card.Text>
        <Button variant="warning">ACQUISTA</Button>
      </Card.Body>
    </Card>
    </Col>
            )
        })
    }
    </Row>
    </Container>
    </>
  );
}

export default AllTheBooks;
