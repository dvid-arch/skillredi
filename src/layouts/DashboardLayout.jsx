import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Full-width Header */}
      <Header />

      {/* Main content area: Sidebar + scrollable Outlet */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar className="w-64 shrink-0" />

        {/* Scrollable outlet area */}
        <main className="flex-1  ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
