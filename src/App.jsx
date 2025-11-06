import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";

const App = () => {
  return (
    <Router>
        <Header/>

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />


      </Routes>
    </Router>
  );
};

export default App;
