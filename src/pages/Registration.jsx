import React from "react";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-orange-400 uppercase">
          Sign Up to Ignite
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="fname"
              className="block text-sm font-semibold text-gray-800"
            >
              Fisrt name
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-orange-400 bg-white border rounded-md focus:border-orange-200 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="lname"
              className="block text-sm font-semibold text-gray-800"
            >
              Last Name
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-orange-400 bg-white border rounded-md focus:border-orange-200 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-orange-400 bg-white border rounded-md focus:border-orange-200 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-orange-400 bg-white border rounded-md focus:border-orange-200 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-orange-400 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button
              onClick={() => navigate("/dashboard")}
              className="w-full px-4 py-2 tracking-wide text-white font-bold transition-colors duration-200 transform bg-orange-400 rounded-md hover:bg-orange-500 focus:outline-none focus:bg-orange-200"
            >
              Signup
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>
        <div className="flex mt-4 gap-x-2">
          <button
            type="button"
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
          >
            <AiOutlineGoogle />
          </button>
          <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
            <AiFillGithub />
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Already have an account?{" "}
          <a href="#" className="font-medium text-orange-400 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
