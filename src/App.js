import React from "react";
import { Container } from "@mui/material";
import "../src/assets/scss/styless.scss";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Header from "./Components/Layout/Header";
import SideBar from "./Components/Layout/SideBar";
import Dashboard from "./Components/Pages/Dashboard";
import Footer from "./Components/Layout/Footer";

function App() {
  library.add(fas)
  return (
    <div className="App">
      <React.Fragment>
        <Header/>
        <SideBar/>
        <Dashboard/>
      </React.Fragment>
    </div>
  );
}

export default App;
