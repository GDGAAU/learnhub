import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { CourseProvider } from "./context/CourseContext";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <AuthProvider>
      <CourseProvider>
        <AppRoutes />
      </CourseProvider>
    </AuthProvider>
  );
}

export default App;