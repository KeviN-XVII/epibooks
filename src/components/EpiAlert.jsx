import Alert from 'react-bootstrap/Alert';

function EpiAlert() {
  return (
    <>
    <h3 className="text-center my-4">Benvenuto in EpiBooks,immergiti nel mondo dei libri!</h3>
    <Alert variant="success" className="mx-4">
      <Alert.Heading>Ciao,Benvenuto in EpiBooks</Alert.Heading>
      <p>
        Guarda il nostro catalogo di libri horror selezionati per te!
        Scegli il tuo prossimo libro da leggere e preparati a vivere emozioni forti e spaventose avventure.
      </p>
      <hr />
      <p className="mb-0">
        Buona lettura e buon divertimento con EpiBooks!
      </p>
    </Alert>
    </>
  );
}

export default EpiAlert;