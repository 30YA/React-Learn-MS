export default function Post(props) {
  return (
    <div className="post">
      <img src={`./assets/${props.img}`} alt="" />
      <h1>{props.title}</h1>
      <div>{props.body}</div>
    </div>
  );
}