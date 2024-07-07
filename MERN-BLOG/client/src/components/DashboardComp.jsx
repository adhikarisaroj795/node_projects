import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  fetchPostsRoute,
  fetchUsersRoute,
  getAllComments,
} from "../utils/APIRoutes.js";

const DashboardComp = () => {
  const [users, setUSers] = useState([]);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [lastMonthsUsers, setLastMonthUser] = useState(0);
  const [lastMonthPosts, setLastMonthPosts] = useState(0);
  const [lastMonthComments, setLastMonthComments] = useState(0);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${fetchUsersRoute}?limit=5`, {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        console.log(data);
        if (res.ok) {
          setUSers(data.users);
          setTotalUsers(data.totalUser);
          setLastMonthUser(data.lastMonthsUsers);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${fetchPostsRoute}?limit=5`, {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        console.log(data);
        if (res.ok) {
          setPosts(data.posts);
          setTotalPosts(data.toatalPosts);
          setLastMonthPosts(data.lastmonthPosts);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const fetchComments = async () => {
      try {
        const res = await fetch(`${getAllComments}?limit=5`, {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        console.log(data);
        if (res.ok) {
          setComments(data.comments);
          setLastMonthComments(data.lastMonthComments);
          setTotalComments(data.totalComments);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (currentUser.user.isAdmin) {
      fetchUsers();
      fetchPosts();
      fetchComments();
    }
  }, [currentUser.user]);
  return <div>DashboardComp</div>;
};

export default DashboardComp;

//10: 28: 19
