// import './input.css
import NavBar from "./components/navbar";
import Landing from "./Landing/landing";
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore"


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
    <React.StrictMode>
      <NavBar />
      <Landing />
    </React.StrictMode>

  );
}

export default App;
