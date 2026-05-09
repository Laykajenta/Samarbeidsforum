import { Navigate } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Laster...</div>;

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}