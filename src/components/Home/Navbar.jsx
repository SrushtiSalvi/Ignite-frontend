import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className={`w-full md:bg-transparent bg-primary fixed`}>
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* <a href="javascript:void(0)">
              <h2 className="text-2xl font-bold text-white">LOGO</h2>
            </a> */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <AiOutlineClose className="text-white font-bold text-xl" />
                ) : (
                  <RxHamburgerMenu className="text-white font-bold text-xl" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-8 text-lg ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-8 md:space-y-0 ">
              <li className="text-white hover:text-indigo-200">
                <Link to="#">HOME</Link>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a to="#">ABOUT US</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a to="#">EVENT</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a to="#">SPONSORS</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a to="#">GALLERY</a>
              </li>
            </ul>

            {/* <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <a
                href="javascript:void(0)"
                className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
              >
                Sign in
              </a>
              <a
                href="javascript:void(0)"
                className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
              >
                Sign up
              </a>
            </div> */}
          </div>
        </div>
        {/* <div className="hidden space-x-2 md:inline-block">
          <a
            href="javascript:void(0)"
            className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
          >
            Sign in
          </a>
          <a
            href="javascript:void(0)"
            className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
          >
            Sign up
          </a>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
