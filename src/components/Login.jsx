import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValidData from "../utils/checkValidData";
import { addUser } from "../utils/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true); // true for showing Sign-in and false for Showing sign-up form
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch=useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null); // use this to refernce to the input box, used to refer tto value which is not used for rendering
  const navigate = useNavigate();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleFormSubmit = () => {
    const errorMessage = checkValidData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(errorMessage);
    if (errorMessage) return;

    //go ahead for authentication
    if (!isSignInForm) {
      // sign-up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7",
          })
            .then(() => {
               const { uid, email, displayName, photoURL } = auth.currentUser;
               dispatch(
                 addUser({
                   uid: uid,
                   email: email,
                   displayName: displayName,
                   photoURL: photoURL,
                 })
               );
              
              navigate("/browse");
            })
            .catch((error) => {});
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign-in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg"
          alt="netflix-background-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 w-3/12 bg-black absolute mt-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm === true ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-3 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email} //
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className=" text-red-400">{errorMessage && errorMessage}</p>
        <button
          onClick={handleFormSubmit}
          className="p-3 my-4 bg-red-700 w-full rounded-lg"
        >
          {isSignInForm === true ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="hover:underline cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm === true
            ? "New to Netflix-gpt? Sign Up now"
            : "Already have an account? Sign In"}{" "}
        </p>
      </form>
    </div>
  );
};
export default Login;
