import 'bootstrap/dist/css/bootstrap.min.css'
import Epibooksnav from './components/epibooksnav.jsx';
import AllTheBooks from './components/AllTheBooks.jsx';
import EpiAlert from './components/EpiAlert.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
      <Epibooksnav />
      <EpiAlert />
      <AllTheBooks />
      <Footer />
    </>
  )
}

export default App
