// Crea un componente BookList. Questo componente riceverà dalle prop un array di libri, e li visualizzerà attraverso un .map() ritornando per ogni elemento il componente SingleBook. Successivamente monta BookList dentro il componente App, e forniscigli una lista di libri da uno dei file .json come prop. Dovresti ottenere a schermo un risultato simile al componente AllTheBooks: ora però la struttura è molto più modulare e riutilizzabile.
import SingleBook from "./SingleBook.jsx";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";

const BookList = (props) => {
  const [search, setSearch] = useState("");
  // adesso do come risultato il form di ricerca e sotto la lista dei libri
  const filteredBooks = props.books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Container>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Cercando il libro:", search);
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Cerca il tuo libro</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cerca il tuo libro"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form.Group>
          {/* <Button variant="primary" type="submit">
        Cerca
      </Button> */}
        </Form>
        <Row>
          {filteredBooks.map((book) => (
            <SingleBook
              book={book}
              key={book.asin}
              onSelectBook={props.onSelectBook}
              selectedAsin={props.selectedAsin}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};
export default BookList;
