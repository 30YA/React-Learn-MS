import { Component } from "react";
import TopHeader from "./components/TopHeader"
import Container from "./components/Container";
export default class App extends Component {
  state = {};
  render() {
    return (
      <>
        <TopHeader />
        <Container />
      </>
    );
  }
}
