import { useState, useEffect } from "react";
import CommentsList from "./CommentsList.jsx";
import AddComment from "./AddComment.jsx";
import Spinner from "react-bootstrap/Spinner";
// CommentArea dovrà fare la fetch delle recensioni per il libro selezionato, e salvare i commenti nel proprio stato. Conterrà inoltre due sotto-componenti: CommentsList and AddComment.

// class CommentArea extends Component {
//   state = {
//     comments: [
//       {
//         comment: "",
//         rate: 1,
//         elementId: "",
//         _id: "",
//         loading: true,
//       },
//     ],
//   };
const CommentArea = (props) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  // richiamo la fetch dei commenti del libro selezionato
  const getComments = function () {
    const URL = "https://striveschool-api.herokuapp.com/api/comments/";
    fetch(URL + props.asinFromApp, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMDZmZjIzZTc0MDAwMTVmN2ZkYjAiLCJpYXQiOjE3NjM2NDEwODcsImV4cCI6MTc2NDg1MDY4N30.6GoB_3LZYaDREDcXy4hkqItBjCu6cpu2G85rO40sUH0",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei commenti");
        }
      })
      .then((arrayComments) => {
        console.log(arrayComments);
        // this.setState({
        //   comments: arrayComments,
        //   loading: false,
        // });
        setComments(arrayComments);
        setLoading(false);
      })
      .catch((err) => console.log("Errore: " + err));
  };
  useEffect(() => {
    getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asinFromApp]);
  // componentDidUpdate(prevProps) {
  //   if (prevProps.asinFromApp !== this.props.asinFromApp) {
  //     this.getComments();
  //   }
  // }
  return (
    <>
      {loading && (
        <Spinner animation="border" variant="warning" className="mt-3" />
      )}
      <div>
        <CommentsList comments={comments} />
        {/* <AddComment asin={props.asinFromApp} newComments={getComments} /> */}
      </div>
    </>
  );
};
export default CommentArea;
