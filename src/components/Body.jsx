import React, { Component } from "react";
import Chat from "./chat";

export default class Body extends Component {
  chatListWrapper = React.createRef();
  scrollhandler = (e) => {
    this.props.scrollHandler(e);
  };
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.chatList.length !== this.props.chatList.length) {
      const list = this.chatListWrapper.current;
      return list.scrollHeight;
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const list = this.chatListWrapper.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }
  render() {
    const chat = this.props.chatList.map((item) => {
      return (
        <Chat
          content={item.message}
          time={item.time}
          type={item.type}
          gravatar={
            item.type === "sent"
              ? this.props.gravatar.user1
              : this.props.gravatar.user2
          }
        />
      );
    });
    return (
      <div
        onScroll={this.scrollhandler}
        ref={this.chatListWrapper}
        className="panel-body chats"
      >
        {chat}
      </div>
    );
  }
}
