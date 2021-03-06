import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import BookList from "./components/BookList";
import BookModal from "./components/BookModal";
import Search from "./components/Search";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container className="mb-5">
            <BookModal />
            <BookList />
          </Container>
          <Container className="mt-5">
            <Search />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
