import React from 'react'
import BreadcrumScreen from '../Components/breadcrum/BreadcrumScreen';
import LoginScreen from "../Components/auth/LoginScreen";
const Login = () => {
  return (
    <>
    <BreadcrumScreen url="Login" />
    <LoginScreen />
    </>
  )
}

export default Login