import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Landing from "./Views/Landing/Landing";
import Home from "./Views/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Detail from "./Views/Detail/Detail";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  getDrivers,
  getDriversByName,
  getDriversDetails,
} from "./Redux/actions";

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDrivers());
  }, []);

  return (
    <div>
      {/* {pathname !== "/" && pathname !== "/detail/:id" && (
        <NavBar getDriversByName={getDriversByName} />
      )} */}
      {pathname !== "/" && !pathname.startsWith("/detail/") && (
        <NavBar getDriversByName={getDriversByName} />
      )}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/detail/:id"
          element={<Detail getDriversDetails={getDriversDetails} />}
        />
        {/* <Route path="/create" element={<Create/>}/>  */}
      </Routes>
    </div>
  );
}

export default App;
