import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import List from "./Screens/List/List";
import AddItems from "./Screens/AddItems/AddItems";
import Orders from "./Screens/Orders/Orders";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/ReactToastify.css';

const App = () => {
  const url = 'http://localhost:4000'
  return (
    <div className="app">
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/Add" element={<AddItems url={url}/>} />
          <Route path="/List" element={<List url={url} />} />
          <Route path="/Orders" element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;