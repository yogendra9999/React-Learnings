/*import React from "react";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <p>Welcome to React!</p>
      </div>
    );
  }
}



function App() {
  return (
    <Welcome name="Yogi" />
  );
}

export default App;*/

function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <p>Welcome to React!</p>
    </div>
  );
}

function App() {
  return (
    <Welcome name="Yogi" />
  );
}

export default App;