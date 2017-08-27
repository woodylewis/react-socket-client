import React, { Component } from 'react';
// eslint-disable-next-line 
import socketIOClient from 'socket.io-client';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: 'http://127.0.0.1:3001'
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on('wls_client', data => this.setState ({ response: data }));
  }

  render() {
    const { response } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React socket client</h2>
        </div>
        <p>
          { response }
        </p>
      </div>
    );
  }
}

export default App;
