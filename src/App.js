import React from "react";
import {BrowserRouter} from "react-router-dom"; 
import RouterComponet from "./components/router/RouterConvention";
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './app.css'
import NavBar from "./components/semantics/Navbar/NavBar";
import Home from "./components/page/Home/Home";

function App() {
  return (

    <BrowserRouter>
      <RouterComponet/>
    </BrowserRouter>
    // <>
    // <NavBar/>
    // <Home/>
    // </>

  );
}
export default App;
