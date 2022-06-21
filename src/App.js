// import './input.css
import NavBar from "./components/navbar";
import Landing from "./Landing/landing";
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Route, Routes } from "react-router-dom";
import Services from "./Sevices/services";



function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users")

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
    }

    getUsers();
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
