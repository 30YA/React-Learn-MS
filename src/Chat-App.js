import { Component } from 'react';
import Heading from './components/Heading';
import Body from './components/Body';
import Footer from './components/Footer';

export default class App extends Component {
  state = {
    title: "chat",
    chatList: [
      {type: "sent", content: "Good morning, sir.What can I do for you?", time: "11:37:08 am"},
      {type: "resive", content: "Well, I am just looking around.", time: "11:39:57 am"},
      {type: "sent", content: "If necessary, please ask me.", time: "11:40:10 am"},
    ],
    gravatar: {
      user1: "https://bootdey.com/img/Content/avatar/avatar1.png",
      user2: "https://bootdey.com/img/Content/avatar/avatar2.png"
    }
  };
  handleSubmit = (content) => {
    this.setState(state => {
      return {
        ...state,
        chatList:[
          ...state.chatList,
          {type: "sent", content: content, time: new Date().toLocaleTimeString()}
        ]
      }
    })
  }
  render() {
    return (
        <div className="container bootstrap snippets">
          <div className="col-md-7 col-xs-12 col-md-offset-2">
            <div className="panel" id="chat">
                <Heading title={this.state.title} />
                <Body chatList={this.state.chatList} gravatar={this.state.gravatar} />
                <Footer handleSubmit={this.handleSubmit} />
            </div>
          </div>
        </div>
    );
  }
}