import { Routes, Route, Navigate } from "react-router-dom";
import { GuestRoute, ProtectedRoute } from "../guards/AuthRoutes";
import Login from "../pages/Login";
import MainPage from "../pages/MainPage";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route
        path="/login"
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
      />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
