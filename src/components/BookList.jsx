// Crea un componente BookList. Questo componente riceverà dalle prop un array di libri, e li visualizzerà attraverso un .map() ritornando per ogni elemento il componente SingleBook. Successivamente monta BookList dentro il componente App, e forniscigli una lista di libri da uno dei file .json come prop. Dovresti ottenere a schermo un risultato simile al componente AllTheBooks: ora però la struttura è molto più modulare e riutilizzabile.
import SingleBook from './SingleBook.jsx';
import { Container, Row} from 'react-bootstrap';

const BookList = (props) => {
    return (
        <Container>
            <Row>
                {props.books.map((book) => (
                        <SingleBook book={book} key={book.asin} />
                ))}
            </Row>
        </Container>
    ); 
}
export default BookList;
    