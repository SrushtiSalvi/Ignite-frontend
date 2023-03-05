import React from "react";
import { useNavigate } from "react-router-dom";

const AllEvents = () => {
  const data = [
    {
      name: "DesignX",
      path: "/event/designx",
    },
    {
      name: "Hackathon",
      path: "/event/hackathon",
    },
    {
      name: "Bug Bounty",
      path: "/event/bug-bounty",
    },
    {
      name: "Mock Placement",
      path: "/event/mock-placement",
    },
    {
      name: "Treasure Hunt",
      path: "/event/treasure-hunt",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="h-screen bg-black">
      <div className="bg-landingPage-lg w-full h-screen bg-center bg-cover opacity-90 bg-black p-4">
        <div className=" flex justify-center  align-middle gap-4">
          {data.map((item, index) => (
            <div key={index} className="border text-white inline-flex ">
              <button className="p-2" onClick={() => navigate(item.path)}>
                <h1>{item.name}</h1>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
