
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import LandingPage from './pages/Landing';
import Login from './pages/Login';

import Unboard from './pages/Unboard';
import Un from './pages/Un';
import CourseRoadmap from './pages/Un2';
import Home from './pages/dashboard/Home';
import Analytics from './pages/dashboard/Analytics';
import Setting from './pages/dashboard/Setting';
import DashboardLayout from './layouts/DashboardLayout';
import Courses from './pages/dashboard/Courses';
import CourseMap from './pages/dashboard/Roadmap';


function App() {


  return (
    <>
      <Router>
        <Routes>

          <Route path='/login' element={<Login />} />
          <Route path='/unboard' element={<Unboard />} />
          <Route path='/un' element={<Un />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Home />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="courses" element={<Courses />} />
            <Route path="settings" element={<Setting />} />
            <Route path="road" element={<CourseMap />} />
          </Route>
          <Route path='/un2' element={<CourseRoadmap />} />
          <Route path='/' element={<LandingPage />} />

          {/* <Setting /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
