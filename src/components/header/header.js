import React, {useState, useContext, useRef, useEffect} from "react"
import { Context } from "../context/context"
import './header.css'
import { Link, useNavigate } from "react-router-dom"

const Header = () =>{
    const {mode, setMode, token, setToken, lang, setLang, modalDisplay, setModalDisplay, setRole} = useContext(Context);
   

    return (
        <header className="header">
            <ol className="header__nav">
                <li className="header__nav__item">
                    <h2 className="header__nav__logo">Pressa</h2>
                </li>

                <li className="header__nav__item search-bar">
                    <input type="text" placeholder="Izlash"/>
                </li>
                <li className="header__nav__item">
                    <a href="/about">Biz haqimizda</a>
                </li>
                <li className="header__nav__item">
                    <a href="/#">Savol va javoblar</a>
                </li>
                <li className="header__nav__item elon__button">
                    <a href="/add-elon">+ E’lon berish</a>
                </li>
            </ol>
        </header>
    )
}

export default Header;