// Crea un componente BookList. Questo componente riceverà dalle prop un array di libri, e li visualizzerà attraverso un .map() ritornando per ogni elemento il componente SingleBook. Successivamente monta BookList dentro il componente App, e forniscigli una lista di libri da uno dei file .json come prop. Dovresti ottenere a schermo un risultato simile al componente AllTheBooks: ora però la struttura è molto più modulare e riutilizzabile.
import SingleBook from './SingleBook.jsx';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row} from 'react-bootstrap';
import { Component } from 'react';

class BookList extends Component {
    state= {
        search: ''
    }
    render() {
    const props = this.props;
    // adesso do come risultato il form di ricerca e sotto la lista dei libri
    const filteredBooks = props.books.filter((book) =>
      book.title.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
        <>
        <Container>
         <Form onSubmit ={(e) => {
            e.preventDefault();
            console.log('Cercando il libro:', this.state.search);
         }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Cerca il tuo libro</Form.Label>
        <Form.Control type="text" placeholder="Cerca il tuo libro" value={this.state.search} onChange={(e) => this.setState({search: e.target.value})}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Cerca
      </Button>
    </Form>
            <Row>
                {filteredBooks.map((book) => (
                        <SingleBook book={book} key={book.asin} />
                ))}
            </Row>
        </Container>
        </>
    ); 
}
}
export default BookList;