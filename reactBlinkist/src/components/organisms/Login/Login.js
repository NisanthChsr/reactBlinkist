import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '../../atoms/Button/Button';

const LoginButton = () => {
  const { loginWithRedirect ,isAuthenticated} = useAuth0();

  return (
      !isAuthenticated && (
  <Button onClick={() => loginWithRedirect()} variant="contained" name="Login" color="primary"/>));
};

export default LoginButton;