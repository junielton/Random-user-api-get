import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import Loading from "../Loading";

class App extends Component {
  constructor(props) {
    super(props);

    //state
    this.state = {
      users: [],
      loading: false,
    };

    //bind
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUsers() {
    this.setState({ loading: true });
    axios
      .get("https://api.randomuser.me/?nat=BR&results=3")
      .then((response) =>
        this.setState({
          users: [...this.state.users, ...response.data.results],
          loading: false,
        })
      )
      .catch((error) => console.log(error));
  }

  componentWillMount() {
    this.getUsers();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUsers();
  }

  render() {
    const { loading, users } = this.state;
    return (
      <div className="app">
        <div className="title">
          <h1>Random User API</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="submit" value="load users" />
          </form>
        </div>
        <div className="users">
          {!loading ? (
            users.map((user, index) => (
              <div key={index} className="user">
                <div>
                  <img src={user.picture.large} alt="" />
                </div>
                <div>
                  <h3>
                    <b>Nome</b>: {user.name.first + " " + user.name.last}
                  </h3>
                  <p>
                    <b>Email</b>: {user.email}
                  </p>
                  <p>
                    <b>Telefone</b>: {user.cell}
                  </p>
                </div>
                <br />
              </div>
            ))
          ) : (
            <Loading message="Loading..." />
          )}
        </div>
      </div>
    );
  }
}

export default App;
