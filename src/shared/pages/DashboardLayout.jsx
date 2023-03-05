import { Outlet, useNavigate } from "react-router-dom";
import React, { lazy, useEffect } from "react";

// import { toast } from "react-toastify";
// import { useAuthStore } from "../../state/authStore";

const Sidebar = lazy(() => import("../components/Sidebar"));
const Topbar = lazy(() => import("../components/Topbar"));

const DashboardLayout = () => {
  {
    // const isLoggedIn = useSelector(state => state.isLoggedIn);
    // const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    let navigate = useNavigate();
    // useEffect(() => {
    //   if (!isLoggedIn) {
    //     toast.error("You are not logged in");
    //     navigate("/admin/login");
    //   }
    // }, []);
    return (
      <div className="flex flex-col min-h-screen">
        <Topbar />
        <section className="flex flex-grow h-full">
          <Sidebar />
          <Outlet />
        </section>
      </div>
    );
  }
};

export default DashboardLayout;
