import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout"
import Homepage from "./pages/homepage/Index"
import Dashboard from "./pages/dashboard/index"
import Database from "./pages/database-viewer/index"
import Grades from "./pages/grades/index"
import Search from "./pages/search/index"
import Notifications from "./pages/notifications/index"
import Analytics from "./pages/analytics/index"
import Attendance from "./pages/attendance/index"
import Login from "./pages/login/index"
import ErrPageNotFound from "./pages/404/errPageNotFound";
import RequireAuth from "./features/auth/RequireAuth";
import { useSelector } from 'react-redux'
import Schedule from "./pages/homepage/schedule/Index";
import HomeScreen from "./pages/homepage/components/HomeScreen";

function App() {
  const loggedInState = useSelector((state) => state.auth.isLoggedIn)
  return (
    <BrowserRouter>
      <Routes>
        {/* Homepage route */}
        <Route path="/" element={<Homepage />}>
          <Route path="" element={<HomeScreen />} />
          <Route path="schedule" element={<Schedule />} />
        </Route>
        {/* Public path - IGNORE layout - research */}
        <Route path="/login" element={!loggedInState && <Login />} />

        <Route path="/portal" element={<Layout />}>
          {/* Protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="" element={<Dashboard />} />
            <Route path="userlist" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="database" element={<Database />} />
            <Route path="grades" element={<Grades />} />
            <Route path="search" element={<Search />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="attendance" element={<Attendance />} />
          </Route>
        </Route>


        {/* redirect all if it doesn't exist */}
        <Route path="*" element={<ErrPageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;