import { Component } from 'react';
import Post from "./Post";
import Comments from "./Comments";

export default class Container extends Component {
  state = {
    comments: null,
  };

  async getComments(){
    const comments = await fetch(`http://localhost:3001/comments?post-id=${this.props.post.id}`)
    return await comments.json();
  }
  componentDidMount(){
    this.getComments().then(data => this.setState({comments: data}))
  }
  componentDidUpdate(prevProps){
    if (prevProps.post.id !== this.props.post.id) {
      this.getComments().then(data => this.setState({comments: data}))
    }
  }
  render() {
    return (
      <div className="container">
        <Post img={this.props.post.image} title={this.props.post.title} body={this.props.post.body}/>
        {this.state.comments && <Comments comments={this.state.comments} />}
      </div>
    );
  }
}