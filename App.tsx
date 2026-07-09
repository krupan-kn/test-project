import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
