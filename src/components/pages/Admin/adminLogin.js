import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/admin/login`, credentials);
    alert("Welcome Admin", credentials.username);
    navigate("/admin/home");
  };

  const styles = {
    container: {
      width: "300px",
      margin: "100px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "20px",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "16px",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#007BFF",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;