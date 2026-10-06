function DefaultPropsExample({ name="Guest"}) {
  return (
    <div>
      <h1> hi {name}</h1>
    </div>
  );
}
function App() {
  return (
    <div>
      <DefaultPropsExample />
      <DefaultPropsExample name="Alice" />
    </div>
  );
}

export default App;