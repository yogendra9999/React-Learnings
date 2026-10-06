import { useState } from "react";

function FullName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>
      <input
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        placeholder="First Name"
      />

      <input
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        placeholder="Last Name"
      />

      <p>Full Name: {firstName} {lastName}</p>
    </div>
  );
}

export default FullName;