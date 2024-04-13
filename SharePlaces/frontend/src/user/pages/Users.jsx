import React from "react";

import UserList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "saroj adhikari",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
