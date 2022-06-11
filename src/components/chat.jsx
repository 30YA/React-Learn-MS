function Chat(props) {
  console.log(props.type);
  return (
    <div className={`chat ${props.type === "recive" ? "chat-left" : ""}`}>
      <div className="chat-avatar">
        <a className="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="right">
          <img src={props.gravatar} alt="..." />
        </a>
      </div>
      <div className="chat-body">
        <div className="chat-content">
          <p>{props.content}</p>
          <time className="chat-time" dateTime="2015-07-01T11:37">{props.time}</time>
        </div>
      </div>
    </div>
  );
}

export default Chat;
