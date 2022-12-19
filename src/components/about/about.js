import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import {HomeICon} from '../../functions/index'
import './about.css'

const About = () =>{

    return(
        <div className="my__container">
                <div className="paddinger blue__bg">
                    <Header />
                </div>
                <div className="paddinger about__main">
                    <div className="about__main__hero">
                    <a href="/"><HomeICon /> </a>
                    <a href="/about">biz haqimizda </a>
                    </div>

                    <h1 className="about__title">Biz haqimizda</h1>

                    <div className="about__items">
                        <span>Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya'ni UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to'plashga qaror qildik.</span>
                        <span>Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya'ni UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to'plashga qaror qildik. </span>
                        <span>Kuni kecha bo'lib o'tgan uchrashuvda to'rt kishidan iborat 8 ta guruh tashkil qilinib, ularga ikki hafta muddat ichida Toshkent shahridagi har qanday onlayn va oflayn tadbirlar to'g'risida e'lonli ma'lumot beruvchi uch bosqichli veb sahifa tayyorlash vazifasi topshirildi.</span>
                        <span>Demak, roppa-rosa 2 haftadan keyin ishtirokchilarning qilgan ishlari chetdan kelgan mehmonlar tomonidan xolis baholanib, dastlabki uchta o'rin egalari qimmatbaho sovg'alar bilan taqdirlanadi. Biz barchaga omad tilab qolamiz.</span>
                    </div>
                </div>
                <div className="paddinger footer">
                    <Footer />
                </div>
        </div>
    )
}

export default About;