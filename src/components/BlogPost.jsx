import { Component } from "react";
import Aside from "./Aside";
import Container from "./Container";

export default class BlogPost extends Component {
  state = {
    posts: null,
    curentPost: null
  };
  async getPosts() {
    const respons = await fetch("http://localhost:3001/posts");
    return await respons.json();
  };
  componentDidMount() {
    this.getPosts().then((data) => {this.setState({posts: data, curentPost: 1});});
  };
  handleChangeCurentPost = (id) => {
    this.setState({curentPost: id})
  }
  render() {
    return (
      <>
        <Aside posts={this.state.posts} handleChangeCurentPost={this.handleChangeCurentPost} />
        {this.state.curentPost && <Container post={this.state.posts.find(element => element.id === this.state.curentPost)} />}
      </>
    );
  };
};