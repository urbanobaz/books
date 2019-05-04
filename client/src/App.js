import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import BookList from './components/BookList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <BookList />
      </div>
    );
  }
}

export default App;
