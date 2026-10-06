import { useState } from "react";

function Parent() {
  const [name, setName] = useState("Mastan");

  return <Child name={name} />;
}

function Child({ name }) {
  return <h1>Hello, {name}</h1>;
}

function App() {
  return <Parent />;
}

export default App;