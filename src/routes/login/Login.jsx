import React, { useEffect, useState } from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../context/slice/authSlice";
import { toast } from "react-toastify";

const initialState = {
  username: "",
  password: "",
};

const Login = () => {
  const { formData, setFormData, handleChange } =
    useGetInputValue(initialState);
  let isLogin = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.username === "jonh32" && formData.password === "87654321") {
      console.log("welcome");
      dispatch(setToken("fake-token"));
      navigate("/admin");
    } else {
      console.log("username or password is incorrect");
      toast.error(`Username or password is incorrect`);
    }
  };

  useEffect(() => {
    if (isLogin == "fake-token") {
      navigate("/admin");
    }
  }, []);
  return (
    <div className="login">
      <div className="container">
        <form onSubmit={handleLogin}>
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            type="text"
            placeholder="UserName jonh32"
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Password 87654321"
          />
          <button>Login </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
