import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
// useSelector((s) => s.auth.token);
const Auth = () => {
  let isLogin = localStorage.getItem("x-auth-token");
  return isLogin ? <Outlet /> : <Navigate replace to={"/login"} />;
};

export default Auth;
