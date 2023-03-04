import React from "react";
import Navbar from "../components/Home/Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-primary md:max-h-max h-max  flex flex-col content-center ">
      <Navbar />
      <div className="flex flex-col justify-center items-center space-y-8 md:pt-40 py-20">
        <div className="text-white flex flex-col justify-center space-y-6">
          <p className="md:text-xl text-lg font-extralight text-center ">
            P.E.S Modern College Of Engineering Shivajinagar, Pune <br />{" "}
            Department of Information Technology
            <br /> presents
          </p>
          <h1 className="md:text-6xl text-4xl font-semibold text-center ">
            MPULSE IGNITE 2023
          </h1>
          <span className="text-center border mx-6 p-1">
            REGISTRATIONS STARTS SOON
          </span>
        </div>
        <div className="flex flex-col space-y-6">
          <button
            className="p-1 px-2 border-2 text-white"
            onClick={() => navigate("/login")}
          >
            Get Started
          </button>
          <button className="p-1 px-2 bg-teal-500 text-black">
            View Events
          </button>
        </div>
      </div>
      <div className="p-4">
        <button className="border p-1 px-2 text-white text-base md:text-lg">
          EXPERIENCE IGNITE IN VR
        </button>
      </div>
    </div>
  );
};

export default Home;
