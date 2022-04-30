import Chat from "./chat";
function Body(props) {
  const chat = props.chatList.map((item) => {
    return (
      <Chat
        content={item.content}
        time={item.time}
        type={item.type}
        gravatar={item.type === "sent" ? props.gravatar.user1 : props.gravatar.user2}
      />
    );
  });
  return (
    <div className="panel-body">
      <div className="chats">{chat}</div>
    </div>
  );
}

export default Body;
