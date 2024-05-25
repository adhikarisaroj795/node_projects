// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import { profileRoute } from "../utils/APIRoutes";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserInfo = async () => {
//       try {
//         const response = await axios.get(profileRoute, {
//           withCredentials: true,
//         });
//         const userInfo = response.data.user;
//         console.log(userInfo);
//         setUser(userInfo);
//       } catch (error) {
//         console.error("error fetching user info", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUserInfo();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
