import React, { useState } from "react";
import { auth } from "../Config/Firebase";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Navbar from "../Home/Navbar";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setError(null); 
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (error) {
      setError(error.message); 
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setError(null); 
      await signInWithPopup(auth, provider);
      navigate("/image");
    } catch (error) {
      setError(error.message); 
    }
  };


  return (
    <div className="bg-cyan-900 h-screen">
      <Navbar />

      <div className="flex flex-col items-center bg-white shadow-lg border-2 border-black w-full md:w-1/2 lg:w-1/3 mx-auto my-6 items-center justify-center rounded-2xl h-5/6">
        <h1 className="text-4xl font-bold mb-4 py-6">Sign Up</h1>
        <form className="w-full max-w-sm" onSubmit={handleSignup}>
        {error && ( 
            <div className="mb-4 text-red-600">{error}</div>
          )}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-2 border border-gray-400 cursor-pointer rounded w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 border border-gray-400 cursor-pointer rounded w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white w-full font-semibold px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign Up
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Signup;
