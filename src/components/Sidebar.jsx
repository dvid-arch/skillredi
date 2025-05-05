import { BookOpen, HeartPulse, HeartPulseIcon, Trophy, TrophyIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside className="w-64  h-full py-[60px]  pl-10">
    <nav className="flex flex-col gap-2">
      <Link to="/dashboard" className="flex gap-2  bg-green-800 text-white p-[10px]"><span>==</span>Dashboard</Link>
      <Link to="/dashboard/analytics" className="flex gap-2   p-[10px]"><span>==</span>Analytics</Link>
      <Link to="/dashboard/courses" className="flex gap-2   p-[10px]"><span><BookOpen color="green"/></span>My Courses</Link>
      <Link to="/dashboard/settings" className="flex gap-2   p-[10px]"><span><TrophyIcon color="green" /></span>Achievement</Link>
    </nav>
  </aside>
);

export default Sidebar;
