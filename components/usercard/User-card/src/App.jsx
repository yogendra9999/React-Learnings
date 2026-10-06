import UserCard from './userCard';

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