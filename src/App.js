import React, { useEffect, useState } from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import StudentList from "./pages/StudentList";
import StudentDetail from "./pages/StudentDetail/StudentDetail";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { user: currentUser } = useSelector((state) => state.user);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  const CheckIfLogin = ({ children }) => {
    return currentUser ? <Navigate to="/" /> : children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            path="/login"
            element={
              <CheckIfLogin>
                <Login />
              </CheckIfLogin>
            }
          ></Route>
          <Route
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/students"
            element={
              <RequireAuth>
                <StudentList />
              </RequireAuth>
            }
          ></Route>
        </Route>

        <Route
          path="/student/:id"
          element={
            <RequireAuth>
              <StudentDetail />
            </RequireAuth>
          }
        />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
