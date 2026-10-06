function UserCard({ name,age,role}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <UserCard name="John Doe" age={30} role="Developer" />
      <UserCard name="Jane Smith" age={25} role="Designer" />
    </div>
  )
}

export default App;