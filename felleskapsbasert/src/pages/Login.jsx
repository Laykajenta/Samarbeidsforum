import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    console.log("Prøver login...", username, password);

    try {
      const res = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      console.log("Status:", res.status);

      if (res.ok) {
        
if (res.ok) {
  window.location.href = "/medlemmer"; 
}

      } else {
        alert("Feil brukernavn eller passord ❌");
      }

    } catch (err) {
      console.error("FEIL:", err);
    }
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>Logg inn</h2>

      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Brukernavn"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <input
            type="password"
            placeholder="Passord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" style={{ marginTop: "15px" }}>
          Logg inn
        </button>
      </form>
    </div>
  );
}