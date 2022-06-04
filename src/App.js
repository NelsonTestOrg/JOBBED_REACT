// import './input.css
import NavBar from "./components/navbar";
import Landing from "./pages/landing";
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";


function App() {
  return (
    <React.StrictMode>
      <NavBar />
      <Landing />
    </React.StrictMode>
    
  );
}

export default App;
