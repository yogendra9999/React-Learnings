import { useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    name: "",
    age: 0
  });

  return (
    <div>
      <input
        value={user.name}
        onChange={e =>
          setUser({
            ...user,
            name: e.target.value
          })
        }
      />

      <input
        type="number"
        value={user.age}
        onChange={e =>
          setUser({
            ...user,
            age: Number(e.target.value)
          })
        }
      />

      <p>{user.name} - {user.age}</p>
    </div>
  );
}

export default Profile;