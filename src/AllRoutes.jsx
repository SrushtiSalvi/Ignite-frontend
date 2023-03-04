import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./shared/pages/DashboardLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
