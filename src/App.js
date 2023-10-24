import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./views/home/Home";
import About from "./views/about/About";
import Login from "./views/login/Login";
import Menu from "./components/menu/menu";
import React from "react";
const App = () => {
  return (
    <Router>

      <Menu />

      <div className={'col-12 px-5 py-5'}>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
