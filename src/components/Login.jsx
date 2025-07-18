import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValidData from "../utils/checkValidData";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true); // true for showing Sign-in and false for Showing sign-up form
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null); // use this to refernce to the input box, used to refer tto value which is not used for rendering
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
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
          onClick={() => {
            const errorMessage = checkValidData(
              email.current.value,
              password.current.value
            );
            setErrorMessage(errorMessage);
          }}
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
