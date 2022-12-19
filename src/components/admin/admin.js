import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const Admin = () =>{
    return(
        <div className="admin__wrapper">
            <Sidebar />
            <div className="admin__right">
                <div className="admin__header">
                <div className="search-bar">
                    <input type="text" placeholder="Izlash"/>
                </div>
                <h2>Username</h2>
                </div>
                <hr />
            <Outlet />
            </div>
        </div>
    )
}

export default Admin;