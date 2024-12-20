import React from "react";

function SignUpForm() {
  const styles = {
    // Background styles
    background: {
      background: "linear-gradient(to bottom, #4a00e0, #8e2de2)",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0",
      fontFamily: "Arial, sans-serif",
    },
    // Form container styles
    container: {
      background: "white",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
      width: "300px",
      textAlign: "center",
    },
    // Heading styles
    heading: {
      color: "#4a00e0",
      marginBottom: "20px",
      fontSize: "24px",
    },
    // Input group styles
    inputGroup: {
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
      background: "#f7f7f7",
      border: "1px solid #ddd",
      borderRadius: "5px",
      padding: "10px",
    },
    input: {
      border: "none",
      outline: "none",
      width: "100%",
      background: "none",
      padding: "5px",
    },
    icon: {
      marginRight: "10px",
      color: "#666",
    },
    // Button group styles
    buttonGroup: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px",
    },
    button: {
      width: "45%",
      padding: "10px",
      border: "none",
      borderRadius: "5px",
      color: "white",
      cursor: "pointer",
      fontSize: "14px",
    },
    signUpButton: {
      background: "#4a00e0",
    },
    loginButton: {
      background: "#ddd",
      color: "#333",
    },
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Sign Up</h2>
        <form>
          {/* Name Input */}
          <div style={styles.inputGroup}>
            <span style={styles.icon}>👤</span>
            <input
              type="text"
              placeholder="Name"
              required
              style={styles.input}
            />
          </div>

          {/* Email Input */}
          <div style={styles.inputGroup}>
            <span style={styles.icon}>📧</span>
            <input
              type="email"
              placeholder="Email id"
              required
              style={styles.input}
            />
          </div>

          {/* Password Input */}
          <div style={styles.inputGroup}>
            <span style={styles.icon}>🔒</span>
            <input
              type="password"
              placeholder="Password"
              required
              style={styles.input}
            />
          </div>

          {/* Buttons */}
          <div style={styles.buttonGroup}>
            <button
              type="submit"
              style={{ ...styles.button, ...styles.signUpButton }}
            >
              Sign Up
            </button>
            <button
              type="button"
              style={{ ...styles.button, ...styles.loginButton }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;