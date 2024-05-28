import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInRoute } from "../utils/APIRoutes";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFalure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

const signIn = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { loading, error: errMessage } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    // const { name, value } = e.target;

    setUserData({
      ...userData,
      // [name]: [value],
      [e.target.id]: e.target.value.trim(),
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      return dispatch(signInFalure("Please fill all the fields"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch(signInRoute, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await res.json();

      if (data.status === false) {
        dispatch(signInFalure(data.errorMessage));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));

        navigate("/");
      }
    } catch (error) {
      dispatch(signInFalure(error.errorMessage));
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              j0raS's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            You can signIn with your email and password or with Google
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                name="email"
                // value={userData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="************"
                id="password"
                name="password"
                // value={userData.password}
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              <>
                {loading ? (
                  <>
                    <Spinner size="sm" />
                    <span className="pl-3">Loading....</span>
                  </>
                ) : (
                  "Sign In"
                )}
              </>
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Dont have an account?</span>
            <Link to="/sign-up" className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {errMessage && (
            <Alert className="mt-5" color="failure">
              {errMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default signIn;
