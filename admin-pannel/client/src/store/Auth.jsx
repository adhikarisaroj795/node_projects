import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const storeTokeninLs = (servertoken) => {
    return localStorage.setItem("token", servertoken);
  };

  //if there is token it is true neither false
  let isLoggedIn = !!token;

  //   tackling the logout
  const logOutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // JWT AUTHENTICATION - to get te current logged data

  const useAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:3030/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.error("Error fetching user data");
    }
  };

  useEffect(() => {
    useAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ storeTokeninLs, logOutUser, isLoggedIn, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the provider");
  }
  return authContextValue;
};
