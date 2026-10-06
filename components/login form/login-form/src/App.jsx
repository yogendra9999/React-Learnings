import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      email,
      password
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />

      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />

      <button
        type="button"
        onClick={() => setShowPassword(prev => !prev)}
      >
        {showPassword ? "Hide" : "Show"}
      </button>

      <button type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;