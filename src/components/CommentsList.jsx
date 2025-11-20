import ListGroup from 'react-bootstrap/ListGroup';
import SingleComment from './SingleComment.jsx';

const CommentsList = function (props) {
  return (
    <ListGroup className="text-center mt-3">
        {props.comments.map((com) => (
    //   qui passo ogni singolo commento come componente quindi SingleComment
        <SingleComment comment={com} key={com._id} />
        ))}
    </ListGroup>
  );
}

export default CommentsList;