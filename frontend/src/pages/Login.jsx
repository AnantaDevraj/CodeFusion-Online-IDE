import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../images/logo.png";
import image from "../images/authPageSide.png";
import { api_base_url } from './helper';

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    fetch(api_base_url + "/login", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: pwd
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success === true) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("userId", data.userId);
          navigate("/");
        } else {
          setError(data.message);
        }
      })
      .catch(err => {
        console.error("Login error:", err);
        setError("Something went wrong. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container w-screen min-h-screen flex items-center justify-between pl-[100px]">
      <div className="left w-[35%]">
        <img className='w-[200px]' src={logo} alt="logo" />
        <form onSubmit={submitForm} className="w-full mt-[60px]">
          <div className='inputBox'>
            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder='Email'
            />
          </div>

          <div className='inputBox'>
            <input
              required
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              type="password"
              placeholder='Password'
            />
          </div>

          <p className='text-[gray]'>
            Don't have an account? <Link to="/signUp" className='text-[#00AEEF]'>Sign Up</Link>
          </p>

          <p className="text-red-500 text-[14px] my-2">{error}</p>

          <button className='btnBlue w-full mt-[20px]' disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>

      <div className="right w-[55%]">
        <img className='h-[100vh] w-[100%] object-cover' src={image} alt="auth visual" />
      </div>
    </div>
  );
};

export default Login;
