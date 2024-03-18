import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./context/themeContext/ThemeContext";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/authContext/AuthContextProvider";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { router } from "./router";
import RoleContextProvider from "./context/roleContext/RoleContextProvider";
import BranchContextProvider from "./context/branchContext/BranchContextProvider";
import DepartmentContextProvider, { DepartmentContext } from "./context/deparmentContext/DepartmentContextProvider";
import CoursePackageContextProvider from "./context/coursePackageContext/CoursePackageContext";
import CourseContextProvider from "./context/courseContext/CourseContextProvider";
import LeadSourceContextProvider from "./context/leadSourceContext/LeadSourceContext";
import UserContextProvider from "./context/UsersContext/UsersContextProvider";
import StudentsContextProvider from "./context/studentsContext/StudContextProvider";
import SingleStudentContextProvider from "./context/singleStudentContext/SingleStudentContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>

        <RoleContextProvider>
          <BranchContextProvider>
            <DepartmentContextProvider>
              <CoursePackageContextProvider>
                <CourseContextProvider>
                <LeadSourceContextProvider>
                  <UserContextProvider>
                 <StudentsContextProvider>
                 <SingleStudentContextProvider>

                 
                

                

                  <ThemeProvider>
                    {/* <RouterProvider router={router}/> */}
                  <ToastContainer style={{ position: "fixed", top: "60px" }} />
                    <App />
                  </ThemeProvider>
                  

                  </SingleStudentContextProvider>
                  </StudentsContextProvider>
                  </UserContextProvider>
                  </LeadSourceContextProvider>
                </CourseContextProvider>
              </CoursePackageContextProvider>
            </DepartmentContextProvider>
          </BranchContextProvider>
        </RoleContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
