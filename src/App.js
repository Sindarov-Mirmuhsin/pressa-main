import React from "react";
import {  Routes, Route } from "react-router-dom";
import About from "./components/about/about";
import Admin from "./components/admin/admin";
import AdminEvent from "./components/admin/event";
import NonPage from "./components/admin/nonpage";
import { Context } from "./components/context/context";
import AddEvent from "./components/event/addevent";
import GetEvent from "./components/event/getevent";
import Main from "./components/home/main";
import Login from "./components/login/login";

function App() {  
  const {mode} = React.useContext(Context);
  const [load, setLoad] =React.useState(true);
  window.addEventListener('load', () =>{
    setLoad(false)
  })
  return (
     load ? (
      <div className="loader__wrapper">
        <div className="loader">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style={{enableBackground: 'new 0 0 50 50'}} xmlSpace="preserve">
          <rect x={0} y={0} width={4} height={10} fill="#333">
            <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin={0} dur="0.6s" repeatCount="indefinite" />
          </rect>
          <rect x={10} y={0} width={4} height={10} fill="#333">
            <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite" />
          </rect>
          <rect x={20} y={0} width={4} height={10} fill="#333">
            <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite" />
          </rect>
        </svg>
      </div>
      </div>
     ):(
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/add-elon" element={<AddEvent />} />
      <Route path="/login" element={<Login />} />
      <Route path="/elon/:id" element={<GetEvent />} />

      <Route path="/admin" element={<Admin />}>
          <Route path="/admin/" element={<AdminEvent />} />
          <Route path="/admin/statistika" element={<NonPage text='Statistika :)' />} />
          <Route path="/admin/deleted" element={<NonPage text='O`chirilganlar :)' />} />
          <Route path="/admin/settings" element={<NonPage text='Sozlamalar :)' />} />
      </Route>
    </Routes>
     )
  );
}

export default App;
