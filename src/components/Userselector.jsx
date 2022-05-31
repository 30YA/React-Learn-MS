import React, { Component } from "react";
import UserList from "./Userlist";
import User from "./User";

class UserSelector extends Component {
  state = {
    users: null,
    seleted_id: 1,
  };
  async getUsers() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    return await users.json();
  }
  componentDidMount() {
    this.getUsers().then((users) => this.setState({ users }));
  }
  Handler = (id) => {
    this.setState({ seleted_id: id });
  };
  render() {
    return (
      <>
        {this.state.users && (
          <UserList
            users={this.state.users}
            selected={this.state.seleted_id}
            Handler={this.Handler}
          />
        )}
        {this.state.users && <User users={this.state.users.find(item => item.id === this.state.seleted_id)} />}
      </>
    );
  }
}
export default UserSelector;
