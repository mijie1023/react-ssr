import Message from 'root/shared/Message';
import * as React from "react";
import "./App.css";

export interface AppProps {message: string};

class App extends React.Component<AppProps, {}> {
  render(): React.ReactNode {
    return (
      <div className="App">
        <div className="App-header">
          <Message message={this.props.message}/>
          <button onClick={(): void => {console.error("trigger click.")}}>click</button>
        </div>
        <p className="App-intro">Is not this cool!!!!</p>
      </div>
    );
  }
}

export default App;