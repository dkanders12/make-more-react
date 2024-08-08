import React, { useState } from "react";
import { supabase } from "../Login/Login.controller"; // Make sure this path is correct

const LoginForm = () => {
  // State Hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Form Handler
  const handleLogin = async (event) => {
    event.preventDefault();

    // Attempt to sign in
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      // Handle successful login, for example, redirect or store session
      console.log("Logged in successfully:", data);
      // Add redirection or other success logic here
    }
  };

  // Output
  return (
    <form onSubmit={handleLogin}>
      <h2>Log ind</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Log ind</button>
    </form>
  );
};

export default LoginForm;
