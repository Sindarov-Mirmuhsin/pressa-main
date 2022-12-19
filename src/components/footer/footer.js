import React from "react";
import {FacebookIcon, InstaIcon, PhoneIcon, TgIcon} from '../../functions/index'
import './footer.css'

const Footer = () =>{

    return(
        <div className="footer__wrapper">
                <div className="header__nav__item">
                    <h2 className="header__nav__logo">Pressa</h2>
                </div>
                <div className="header__nav__item">
                    <a href="/about">Biz haqimizda</a>
                </div>
                <div className="header__nav__item">
                    <a href="/#">Savol va javoblar</a>
                </div>
                <div className="header__nav__item">
                   <a href="tel:712001102"> <PhoneIcon />  +71 200-11-02</a>
                </div>
                <div className="header__nav__item">
                   <a href="https://facebook.com"> <FacebookIcon /> </a>
                   <a className="ms-2 me-2" href="https://instagram.com"> <InstaIcon /> </a>
                   <a href="https://telegram.org"> <TgIcon /> </a>
                </div>
        </div>
    )
}

export default Footer;