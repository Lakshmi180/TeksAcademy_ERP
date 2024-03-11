import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PublicLayout from "../components/Layout/PublicLayout";
import { Login } from "../components/Auth/Login";
import ReqireAuth from "../components/Layout/ReqireAuth";
import Dashboard from "../components/pages/dashboard/Dashboard";
import { ForgotPassword } from "../components/Auth/ForgotPassword";

export const router = createBrowserRouter([
  {
    element: <ReqireAuth />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },

  {
    element: <PublicLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword />,
      },
    ],
  },
]);
