export default function Comment(props) {
  return (
    <div className="comment">
      <p>{props.comment.body}</p>
    </div>
  );
}
