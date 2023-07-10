import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import FormAddEdit from "./components/FormAddEdit";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      {/* <ToastContainer position="top-right" autoClose={2000} /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/add" element={<FormAddEdit />}></Route>
        <Route path="/update/:id" element={<FormAddEdit />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
