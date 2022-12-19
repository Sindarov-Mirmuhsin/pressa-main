import React from "react";
import { NavLink } from "react-router-dom";
import { HomeICon } from "../../functions";
import './admin.css'

const Sidebar = () =>{

    return(
        <div className="sidebar">
            <div className="sidebar__logo">
                <a href="/">Pressa</a>
            </div>

            <div className="sidebar__links">
                <NavLink to='/admin'><i className="me-2 fa-solid fa-house"></i>Bosh sahifa</NavLink>
                <NavLink to='/admin/statistika'><i className="me-2 fa-brands fa-usps"></i>Statistika</NavLink>
                <NavLink to='/admin/deleted'><i className="me-2 fa-solid fa-trash"></i>O’chirilganlar</NavLink>
                <NavLink to='/admin/settings'> <i className="me-2 fa-solid fa-gear"></i>Sozlamalar</NavLink>
                <NavLink to='/'><i className="me-2 fa-solid fa-right-from-bracket"></i>Chiqish</NavLink>
            </div>
            <div className="sidebar__footer">
                2022 All Rights
            </div>
        </div>
    )
}

export default Sidebar