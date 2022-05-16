import Comment from "./Comment";
export default function Comments(props) {
  const comments = props.comments.map(item => <Comment key={item.id} comment={item} />)
  return (
    <div className="comments">
      <p>Comments:</p>
      {comments}
    </div>
  );
}