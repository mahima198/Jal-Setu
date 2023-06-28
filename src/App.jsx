import React from "react";
import "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import BasicInfo from "./components/BasicInfo/BasicInfo";
import Login from "./components/Login/Login";
import {Routes, Route} from "react-router-dom"
const App = () => {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Login/>} /> */}
          <Route path="/" element={<BasicInfo/>} />
        </Routes>
      </div>
  );
};

export default App;
