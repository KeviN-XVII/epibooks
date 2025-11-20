import ListGroup from 'react-bootstrap/ListGroup';
const SingleComment = function (props) {
    return (
        <ListGroup.Item>{props.comment.comment} ⭐{props.comment.rate} </ListGroup.Item>
    );
};
export default SingleComment;