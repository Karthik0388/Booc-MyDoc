import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";
import Login from "./Components/AuthComponents/Login";
import Register from "./Components/AuthComponents/Register";

const App = () => {
  return (
    <Fragment>
      <Router>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
