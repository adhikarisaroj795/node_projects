import { useEffect, useState } from "react";
import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import { useSelector } from "react-redux";

import "react-quill/dist/quill.snow.css";
import {
  getStorage,
  uploadBytesResumable,
  ref,
  getDownloadURL,
} from "firebase/storage";
import { updatePostRoute, fetchPostsRoute } from "../utils/APIRoutes";
import { app } from "../firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePost = () => {
  const { currentUser } = useSelector((state) => state.user);

  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`${fetchPostsRoute}/?postId=${postId}`);
        const data = await res.json();

        if (!res.ok) {
          setPublishError(data.message);
          return;
        }
        if (res.ok) {
          setPublishError(null);
          setFormData(data.posts[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, [postId]);

  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError("Please select an image");
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError("Image Upload failed");
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadUrl });
          });
        }
      );
    } catch (error) {
      setImageUploadError("Image upload failed");
      setImageUploadProgress(null);
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData._id) {
        const res = await fetch(
          `${updatePostRoute}/${formData._id}/${currentUser.user._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            credentials: "include",
          }
        );
        const data = await res.json();
        if (!res.ok) {
          setPublishError(data.errorMessage);
          return;
        }

        if (res.ok) {
          setPublishError(null);
          navigate(`/post/${data.updatePost.slug}`);
        }
      }
    } catch (error) {
      setPublishError("something went wrong");
      console.log(error.message);
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Update Post</h1>
      {formData._id ? (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 sm:flex-row justify-between">
            <TextInput
              className="flex-1"
              type="text"
              placeholder="Title"
              required
              id="title"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              value={formData.title}
            />
            <Select
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              value={formData.category}
            >
              <option value={"uncategorized"}>Select a category</option>
              <option value={"javascript"}>JavaScript</option>
              <option value={"reactjs"}>React.js</option>
              <option value={"nodejs"}>Node.js</option>
            </Select>
          </div>
          <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
            <FileInput
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <Button
              type="button"
              gradientDuoTone="purpleToBlue"
              size="sm"
              outline
              onClick={handleUploadImage}
              disabled={imageUploadProgress}
            >
              {imageUploadProgress ? (
                <div className="w-16 h-16">
                  <CircularProgressbar
                    value={imageUploadProgress}
                    text={`${imageUploadProgress || 0}%`}
                  />
                </div>
              ) : (
                "Upload Image"
              )}
            </Button>
          </div>
          {imageUploadError && (
            <Alert color={"failure"}>{imageUploadError}</Alert>
          )}
          {formData.image && (
            <img
              src={formData.image}
              alt="upload"
              className="w-full h-72 object-cover"
            />
          )}
          <ReactQuill
            theme="snow"
            value={formData.content}
            placeholder="Write something..."
            className="h-72 mb-12"
            required
            onChange={(value) =>
              setFormData({
                ...formData,
                content: value,
              })
            }
          />
          <Button
            type="submit"
            gradientDuoTone={"purpleToPink"}
            disabled={!formData._id}
          >
            Update Post
          </Button>
          {publishError && (
            <Alert className="mt-5" color={"failure"}>
              {publishError}
            </Alert>
          )}
        </form>
      ) : (
        <div className="text-center">Loading post data...</div>
      )}
    </div>
  );
};

export default UpdatePost;
