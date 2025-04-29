import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { login, isLoading, error } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      // Error is already handled in the store
    }
  };

  return (
<form className="Login" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button disabled={isLoading} className="btn">
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
      <p>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
