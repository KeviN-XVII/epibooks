import { Component } from "react";
import CommentsList from "./CommentsList.jsx";
import AddComment from "./AddComment.jsx";
// CommentArea dovrà fare la fetch delle recensioni per il libro selezionato, e salvare i commenti nel proprio stato. Conterrà inoltre due sotto-componenti: CommentsList and AddComment.

class CommentArea extends Component {
    state = {
        comments: [
            {
            "author": "",
            "comment": "",
            "rate": 1,
            "elementId": "",
            "_id": ""
            }
        ]
    };
    // richiamo la fetch dei commenti del libro selezionato
    getComments = function () {
    const URL = "https://striveschool-api.herokuapp.com/api/comments/";
    fetch(URL + this.props.asin, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMDZmZjIzZTc0MDAwMTVmN2ZkYjAiLCJpYXQiOjE3NjM2NDEwODcsImV4cCI6MTc2NDg1MDY4N30.6GoB_3LZYaDREDcXy4hkqItBjCu6cpu2G85rO40sUH0"
        }
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
        this.setState({ 
            comments: arrayComments 
        });
    })
    .catch((err) => console.log("Errore: " + err));
};
componentDidMount() {
    this.getComments();
}

    render() {
        return (
            <div>
                <CommentsList comments={this.state.comments} />
                <AddComment asin={this.props.asin} newComments={this.getComments} />
            </div>
        );
    }
};
export default CommentArea;