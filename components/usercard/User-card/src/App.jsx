import UserCard from './UserCard';

function App() {
  return (
    <div>
      <UserCard
        name="Yogi"
        email="yogi@gmail.com"
        age={21}
      />
    </div>
  );
}

export default App;