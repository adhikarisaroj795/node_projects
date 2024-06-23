import { useEffect, useState } from "react";
import { fetchPostsRoute } from "../utils/APIRoutes";
import { useSelector } from "react-redux";
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
    <div>
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
            <Table.Body>
              {userPosts.map((post) => (
                <Table.Row key={post._id}>
                  <Table.Cell>{post.updatedAt}</Table.Cell>
                  {/* Add other cells here */}
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
