import React from "react";
import Navbar from "../components/Home/Navbar";
import { useNavigate } from "react-router-dom";
import landingBg from "../assets/bg1.jpg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=" md:h-max h-max  flex flex-col content-center  bg-landingPage-lg">
      <Navbar />
      <div className="flex flex-col justify-center items-center space-y-7   w-full h-screen bg-center bg-cover bg-black opacity-70">
        <div className="text-white flex flex-col justify-center space-y-6 mt-8 z-10 ">
          <p className="md:text-2xl text-lg font-light text-center ">
            P.E.S Modern College Of Engineering Shivajinagar, Pune <br />{" "}
            Department of Information Technology
            <br /> presents
          </p>
          <h1 className="md:text-6xl text-4xl font-semibold text-center ">
            MPULSE IGNITE 2023
          </h1>
          <span className="text-center mx-6">REGISTRATIONS STARTS SOON</span>
        </div>
        <div className="flex flex-col space-y-6">
          <button className="p-1 px-2 border-2 text-white">Get Started</button>
          <button
            className="p-1 px-2 bg-teal-500 text-black"
            onClick={() => navigate("/all-events")}
          >
            View Events
          </button>
        </div>
        <div className="p-4">
          <button className="border p-1 px-2 text-white text-base md:text-lg">
            EXPERIENCE IGNITE IN VR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
