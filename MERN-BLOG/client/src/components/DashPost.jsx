import { useEffect, useState } from "react";
import { fetchPostsRoute } from "../utils/APIRoutes";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "flowbite-react";

const DashPost = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true); // Set loading to true before fetching
        const res = await fetch(
          `${fetchPostsRoute}?userId=${currentUser.user._id}`
        );

        const data = await res.json();
        if (res.ok) {
          setUserPosts(data.posts);
        } else {
          throw new Error("Failed to fetch posts");
        }
      } catch (error) {
        console.error(error.message);
        // Optionally, set an error state here and display an error message to the user
      } finally {
        setIsLoading(false); // Always set loading to false after fetching
      }
    };

    if (currentUser.user.isAdmin) {
      fetchPost();
    }
  }, [currentUser.user._id]);

  if (isLoading) {
    return <div>Loading...</div>; // Display loading indicator
  }

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      {currentUser.user.isAdmin && userPosts.length > 0 ? (
        <>
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell>Date Updated</Table.HeadCell>
              <Table.HeadCell>Post image</Table.HeadCell>
              <Table.HeadCell>Post title</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>Edit</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {userPosts.map((post) => (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={post._id}
                >
                  <Table.Cell>
                    {new Date(post.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/post/${post.slug}`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-20 h-10 object-cover bg-gray-500"
                      />
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className="font-medium text-red-900 dark:text-white"
                      to={`/post/${post.slug}`}
                    >
                      {post.title}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{post.category}</Table.Cell>
                  <Table.Cell>
                    <span className="font-medium text-red-500 hover:underline cursor-pointer">
                      Delete
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className="text-teal-500 hover:underline"
                      to={`/update-post${post._id}`}
                    >
                      <span>Edit</span>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </>
      ) : (
        <p>You have no posts yet!</p> // Fixed typo
      )}
    </div>
  );
};

export default DashPost;

//5:56
