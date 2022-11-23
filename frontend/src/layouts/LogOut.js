import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

function LogOut() {
  useEffect(() => localStorage.removeItem("user"), []);

  return (
    <div>
      <Navigate to="/authentication/sign-in" replace />
    </div>
  );
}

export default LogOut;
