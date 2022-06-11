import { Component } from 'react';
import Heading from './components/Heading';
import Body from './components/Body';
import Footer from './components/Footer';
import messageGenerator from './faker';
import './components/Style.css';

export default class App extends Component {
  state = {
    title: "chat",
    chatList: messageGenerator(10),
    gravatar: {
      user1: "https://cdn1.vectorstock.com/i/thumb-large/94/70/profile-icon-asian-male-head-in-chat-bubble-vector-19669470.jpg",
      user2: "https://cdn2.vectorstock.com/i/thumb-large/72/96/emotion-avatar-man-happy-successful-face-vector-13577296.jpg"
    }
  };
  scrollHandler = (event) => {
    // console.log(event.target.scrollTop);
    if (event.target.scrollTop === 0) {
      this.fetchData(5)
    }
  }
  fetchData = (num) => {
    this.setState(state => {
      return{
        chatList:[
          ...messageGenerator(num),
          ...state.chatList
        ]
      }
    })
  }
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
                <Body scrollHandler={this.scrollHandler} chatList={this.state.chatList} gravatar={this.state.gravatar} />
                <Footer handleSubmit={this.handleSubmit} />
            </div>
          </div>
        </div>
    );
  }
}