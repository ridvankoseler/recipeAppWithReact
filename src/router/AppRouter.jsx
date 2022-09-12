import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { GlobalStyles } from "../globalStyles/Global.styles";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="register" element={<Register/>}/>

        <Route path="about" element={<PrivateRouter/>}>
          {/* about ismi gelirse linke privateRouter çağır. user bilgisi varsa outlet çağrıyor */}
          <Route path='' element={<About />} />
        </Route>
        <Route path="detail" element={<PrivateRouter/>}>
          <Route path='' element={<Detail />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
