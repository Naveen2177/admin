import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Products from './pages/products'
import RegisterRedux from "./pages/registerRedux";
import Users from "./pages/users";
import Admin from "./layout/admin";
import Password from "./pages/forgetPassword"
import NewPassword from "./pages/newPassword";


function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/login" element={<Login />} />

          <Route path="/forgetPassword" element={<Password />} />

          <Route path="/newPassword" element={<NewPassword />} />

          <Route path="/registerRedux" element={<RegisterRedux />} />

          <Route element={<Admin />}>

            <Route exact path="/" element={<Dashboard />} />

            <Route path="/Products" element={<Products />} />

            <Route path="/users" element={<Users />} />

          </Route>


        </Routes>
      </Router>
    </>
  );
}

export default App;
