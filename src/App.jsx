import React, { Suspense } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/FakeAuthContext";
import Welcome from "./pages/Welcome";
import CreatAccount from "./pages/CreateAccount";
import Volunteer from "./pages/Volunteer";
import ConfirmEmail from "./pages/ConfirmEmail";
import Login from "./pages/LoginPage";
import VerifyCode from "./pages/VerifyCode";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import LoaderFullPage from "./components/LoaderFullPage";
import UserDashboard from "./pages/UserDashboard";
// import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<LoaderFullPage />}>
          <Routes>
            <Route path="/" element={<Welcome />} />

            <Route path="/create-account" element={<CreatAccount />} />
            <Route path="/confirm-email" element={<ConfirmEmail />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/reset-password" element={<ForgotPassword />} />
            {/* <Route path="/new-password" element={<ResetPassword />} /> */}

            <Route path="/verify-code" element={<VerifyCode />} />

            <Route path="app/*">
              <Route path="" element={<MainPage />} />
              <Route path="dashboard" element={<UserDashboard />} />
              <Route path="volunteer" element={<Volunteer />} />
            </Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
