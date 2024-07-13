import { Button, Select, TextInput } from "flowbite-react";
import { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import { fetchPostsRoute } from "../utils/APIRoutes";

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: "",
    sort: "desc",
    category: "uncategorized",
  });

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowMoreLoading, setIsShowMoreLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const fetchPosts = useCallback(async (params) => {
    setIsLoading(true);
    try {
      const res = await fetch(`${fetchPostsRoute}?${params}`);
      if (!res.ok) throw new Error("Failed to fetch posts");
      const data = await res.json();
      setPosts(data.posts);
      setShowMore(data.posts.length === 9);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm") || "";
    const sortFromUrl = urlParams.get("sort") || "desc";
    const categoryFromUrl = urlParams.get("category") || "uncategorized";

    setSidebarData((prevState) => ({
      ...prevState,
      searchTerm: searchTermFromUrl,
      sort: sortFromUrl,
      category: categoryFromUrl,
    }));

    fetchPosts(urlParams.toString());
  }, [location.search, fetchPosts]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSidebarData((prevState) => ({
      ...prevState,
      [id]: value || (id === "category" ? "uncategorized" : ""),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    if (sidebarData.searchTerm) {
      urlParams.set("searchTerm", sidebarData.searchTerm);
    }
    urlParams.set("sort", sidebarData.sort);
    urlParams.set("category", sidebarData.category);
    navigate(`/search?${urlParams.toString()}`);
  };

  const handleShowMore = async () => {
    setIsShowMoreLoading(true);
    try {
      const numberOfPosts = posts.length;
      const urlParams = new URLSearchParams(location.search);
      urlParams.set("startIndex", numberOfPosts);
      const res = await fetch(`${fetchPostsRoute}?${urlParams.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch more posts");
      const data = await res.json();
      setPosts((prevPosts) => [...prevPosts, ...data.posts]);
      setShowMore(data.posts.length === 9);
    } catch (error) {
      console.error(error);
    } finally {
      setIsShowMoreLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b md:border-r md:min-h-screen border-gray-500">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">
              Search Term:
            </label>
            <TextInput
              placeholder="Search..."
              id="searchTerm"
              type="text"
              value={sidebarData.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Sort:</label>
            <Select onChange={handleChange} value={sidebarData.sort} id="sort">
              <option value="desc">Latest</option>
              <option value="asc">Oldest</option>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Category:</label>
            <Select
              onChange={handleChange}
              value={sidebarData.category}
              id="category"
            >
              <option value="uncategorized">Uncategorized</option>
              <option value="reactjs">React.js</option>
              <option value="nextjs">Next.js</option>
              <option value="javascript">JavaScript</option>
            </Select>
          </div>
          <Button
            type="submit"
            outline
            gradientDuoTone="purpleToPink"
            disabled={isLoading}
          >
            Apply Filters
          </Button>
        </form>
      </div>
      <div className="w-full">
        <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5">
          Posts results:
        </h1>
        <div className="p-7 flex flex-wrap gap-4">
          {isLoading && <p className="text-xl text-gray-500">Loading...</p>}
          {!isLoading && posts.length === 0 && (
            <p className="text-xl text-gray-500">No posts found.</p>
          )}
          {!isLoading &&
            posts.map((post) => <PostCard key={post._id} post={post} />)}
          {showMore && (
            <button
              onClick={handleShowMore}
              className="text-teal-500 text-lg hover:underline p-7 w-full"
              disabled={isShowMoreLoading}
            >
              {isShowMoreLoading ? "Loading..." : "Show More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
