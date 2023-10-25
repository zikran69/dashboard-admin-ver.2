import { Navigate, Outlet } from "react-router-dom";
import auth from "../utils/auth";

export default function ProtectedRoute() {
  if (!auth.isAuthenticated()) {
    return (
      <div>
        <Outlet />
        <Navigate to="/login" />
      </div>
    );
  }
  return <Navigate to="/dashboard" />;
}
