import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/Auth";

export const Logout = () => {
  const { logOutUser } = useAuth();
  useEffect(() => {
    logOutUser();
  }, [logOutUser]);

  return <Navigate to="/login" />;
};
