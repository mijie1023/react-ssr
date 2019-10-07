import Cell from 'root/shared/Cell';
import Message from 'root/shared/Message';
import Canvas from 'root/shared/CanvasDemo';
import * as React from "react";
import "./App.css";

export interface AppProps {message: string};

class App extends React.Component<AppProps, {}> {
  render(): React.ReactNode {
    const cells = [];

    for(let i = 0; i < 1000; i++) {
      cells.push(<Cell key={i} text={'cell' + i}/>);
    }

    return (
      <div className="App">
        <div className="App-header">
          <Message message={this.props.message}/>
          <img src={Canvas.toDataURL()}/>
          <button onClick={(): void => {console.error("trigger click.")}}>click</button>
        </div>
        <p className="App-intro">Is not this cool!!!!</p>
        <div className="App-pane">{cells}</div>
      </div>
    );
  }
}

export default App;