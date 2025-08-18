import { Routes, Route, Navigate } from "react-router-dom";
import { GuestRoute, ProtectedRoute } from "../guards/AuthRoutes";
import Login from "../pages/Login";
import MainPage from "../pages/MainPage";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import TodoList from "../components/todo/TodoList";

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
        element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/todo" element={<TodoList />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

