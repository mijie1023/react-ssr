import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Welcome to React in the Server!</h2>
          <button onClick={() => {console.error('trigger click.')}}>click</button>
        </div>
        <p className="App-intro">Isn't this cool!!!!</p>
      </div>
    );
  }
}
export default App;
