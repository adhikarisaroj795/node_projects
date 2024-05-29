import { Button } from "flowbite-react";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase"; // Assuming this is correctly imported elsewhere
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { googleAuthRoute } from "../utils/APIRoutes";

const OAuth = () => {
  // Removed the unnecessary parameter
  const auth = getAuth(app); // Ensure you pass the Firebase app instance here
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultFromGoogle = await signInWithPopup(auth, provider);
      const userEmail = resultFromGoogle.user.providerData[0].email;

      const res = await fetch(googleAuthRoute, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resultFromGoogle.user.displayName,
          email: userEmail,
          googlePhotoUrl: resultFromGoogle.user.photoURL,
        }),
      });
      console.log("google", resultFromGoogle);
      const data = await res.json();
      console.log("data", res);
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      type="button"
      gradientDuoTone="pinkToOrange"
      outline
      onClick={handleGoogleClick}
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Continue with Google
    </Button>
  );
};

export default OAuth;
