import { Outlet, Navigate } from "react-router-dom";

import { useAuthContext } from "@app/providers/AuthProvider";

export const ProtectedRoute = () => {
  const { auth } = useAuthContext();

  return auth.accessToken ? <Outlet /> : <Navigate to="/" />;
};
