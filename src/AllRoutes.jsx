import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./shared/pages/DashboardLayout";
import Home from "./pages/Home";

import AllEvents from "./pages/AllEvents";
import Login from "./components/shared/Login";
import Registration from "./components/shared/Registration";
import DesignX from "./pages/DesignX";
import Hackathon from "./pages/Hackathon";
import BugBounty from "./pages/BugBounty";
import MockPlacements from "./pages/MockPlacements";
import TreasureHunt from "./pages/TreasureHunt";
import EventLayout from "./pages/EventLayout";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/all-events" element={<AllEvents />} />
        <Route path="/event" element={<EventLayout />}>
          <Route path="designx" element={<DesignX />} />
          <Route path="hackathon" element={<Hackathon />} />
          <Route path="bug-bounty" element={<BugBounty />} />
          <Route path="mock-placement" element={<MockPlacements />} />
          <Route path="treasure-hunt" element={<TreasureHunt />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
