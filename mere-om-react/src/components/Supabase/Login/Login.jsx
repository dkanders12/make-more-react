import React, { useState, useEffect } from "react";
import { supabase } from "../Login/Login.controller"; // Make sure this path is correct
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // useNavigate hook for navigation

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      console.log("Logged in successfully:", data);
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));

      if (data.session) {
        localStorage.setItem("access_token", data.session.access_token);
        console.log(localStorage);
        navigate("/FetchSupa");
      }
    } catch (err) {
      console.error("Unexpected error during login:", err);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <>
      {user ? (
        <div>
          Welcome, {user.email} <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Log in</h2>
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
          <button type="submit">Log in</button>
        </form>
      )}
    </>
  );
};

export default LoginForm;
