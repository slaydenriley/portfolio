import React, { Component } from 'react';
import Home from './components/Home.js';


class App extends Component {
  componentDidMount() {
    fetch('http://localhost:3001/users')
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        Hi, I'm Riley.
      </div>
    )
  };
};

export default App;
