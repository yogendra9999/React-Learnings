function Button({ children, onClick }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function App() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <Button onClick={handleClick}>
      Click Me
    </Button>
  );
}

export default App;