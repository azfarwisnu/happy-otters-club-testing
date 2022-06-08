import React from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import "./assets/css/App.css"

import Home from "./pages/Home";

class App extends React.Component {
  render() {
    return (
      <>
        <Home />
      </>
    );
  }
}

export default App;
