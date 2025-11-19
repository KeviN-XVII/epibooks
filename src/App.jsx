import 'bootstrap/dist/css/bootstrap.min.css'
import Epibooksnav from './components/epibooksnav.jsx';
import AllTheBooks from './components/AllTheBooks.jsx';
import EpiAlert from './components/EpiAlert.jsx';
import Footer from './components/Footer.jsx';
import SingleBook from './components/SingleBook.jsx';
import BookList from './components/BookList.jsx';
import horrorBooks from './horror.json';

function App() {

  return (
    <>
      <Epibooksnav />
      <EpiAlert />
      {/* <SingleBook book={{
         "asin": "0345546792",
    "title": "The Silent Corner: A Novel of Suspense (Jane Hawk)",
    "img": "https://images-na.ssl-images-amazon.com/images/I/91dDIYze1wL.jpg",
    "price": 7.92,
    "category": "horror"
      }} /> */}
      <BookList books={horrorBooks} />
      {/* <AllTheBooks /> */}
      <Footer />
    </>
  )
}

export default App
