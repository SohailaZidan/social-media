import { Navigate } from "react-router-dom";
import { authService } from "../services/authService";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: Props) => {
  if (!authService.isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export const GuestRoute = ({ children }: Props) => {
  if (authService.isLoggedIn()) {
    return <Navigate to="/home" replace />
  }
  return <>{children}</>;
};
