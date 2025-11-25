import { useState } from "react";
import Form from "react-bootstrap/Form";

// class AddComment extends Component {
//      state = {
//         comment: {
//             "comment": "",
//             "rate": 1,
//             "elementId": this.props.asin
//         }
//     };
const AddComment = (props) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: props.asin,
  });
  const sendComment = function () {
    console.log(comment);
    const URL = "https://striveschool-api.herokuapp.com/api/comments/";
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMDZmZjIzZTc0MDAwMTVmN2ZkYjAiLCJpYXQiOjE3NjM2NDEwODcsImV4cCI6MTc2NDg1MDY4N30.6GoB_3LZYaDREDcXy4hkqItBjCu6cpu2G85rO40sUH0",
      },
    })
      .then((res) => {
        if (res.ok) {
          alert("Commento aggiunto con successo");
          this.props.newComments();
        } else {
          alert("Errore nell'invio del commento");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        sendComment();
      }}
    >
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Commento</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={comment.comment}
          onChange={(e) => setComment({ ...comment, comment: e.target.value })}
          required
        />
      </Form.Group>
      <Form.Select
        aria-label="rate"
        value={comment.rate}
        onChange={(e) => setComment({ ...comment, rate: e.target.value })}
        required
      >
        <option>Lascia la tua valutazione</option>
        <option value="1">1⭐</option>
        <option value="2">2⭐</option>
        <option value="3">3⭐</option>
        <option value="4">4⭐</option>
        <option value="5">5⭐</option>
      </Form.Select>
      <button type="submit" className="btn btn-success mt-2 align-items-center">
        Invia
      </button>
    </Form>
  );
};
export default AddComment;
