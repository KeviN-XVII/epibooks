import "bootstrap/dist/css/bootstrap.min.css";
import Epibooksnav from "./components/epibooksnav.jsx";
import EpiAlert from "./components/EpiAlert.jsx";
import Footer from "./components/Footer.jsx";
import SingleBook from "./components/SingleBook.jsx";
import BookList from "./components/BookList.jsx";
import horrorBooks from "./horror.json";
import CommentArea from "./components/CommentArea.jsx";
import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";

class App extends Component {
  state = {
    selectedAsin: null,
  };

  onSelectBook = (asin) => {
    this.setState({ selectedAsin: asin });
  };

  render() {
    return (
      <>
        <Epibooksnav />
        <EpiAlert />
        <div className="d-flex">
          <BookList
            books={horrorBooks}
            onSelectBook={this.onSelectBook}
            selectedAsin={this.state.selectedAsin}
          />
          <CommentArea asinFromApp={this.state.selectedAsin} />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
