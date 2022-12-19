import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import {DateIcon, HomeICon, OfflineIcon, OnlineIcon} from '../../functions/index'
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../context/context";
import { Link, useNavigate, useParams } from "react-router-dom";
import '../home/homeItem.css'
const GetEvent = () =>{
const {link} = useContext(Context);
const [data, setData] =useState({fetched: false, error: false, data:[]});
const {id} = useParams();
const navigate = useNavigate()

useEffect(() =>{
    fetch(`${link}/events`)
    .then((res) => res.json())
    .then(result =>{
        console.log(result);
      if(result.data){
        setData({fetched: true, data: result.data})
      }
    })
    .catch(() => setData({ error: true, fetched: false }));
},[]);

const founded = data.data.find(a => a.event_id === id-0);

// if(data.error || !founded){
//     window.location.href ='/'
// }

console.log(data);
    return(
        <div className="my__container">
                <div className="paddinger blue__bg">
                    <Header />
                </div>
                {/* <div className="paddinger get__event">
                    <div className="get__event__hero">
                        <a href="/"><HomeICon /> </a>
                        <span>{founded ? founded.body.split(' ').slice(0,2).join(' ') : 'E`lon'}</span>
                    </div>
                    <div className="mt-5 founded__event">
                        <div className="founded__event__left">
                            <h3>{founded ? founded.body.split(' ').slice(0,5).join(' ') : 'E`lon'}</h3>

                            <div className="elon__body__wrapper">
                                    <span> <DateIcon /> &nbsp; {founded.event_date}</span>
                                    <span><i className="fa-solid fa-clock"></i>&nbsp;{founded.event_time}</span>
                                    <span>  {founded.event_type === 'online' ? <OnlineIcon /> : <OfflineIcon />} &nbsp; {founded.event_type}</span>
                            </div>
                        </div>

                        <div className="founded__event__right">
                            <img src={`${link}/uploads/${founded.event_img}`} alt="some alt" />
                            <div>
                                {founded.body}
                            </div>
                        </div>
                    </div>

                    <div className="recommendation">
                        <h3>Tavsiya etamiz...</h3>
                       
                        <div className="elon__wrapper">
                        {
                            data.fetched && data.data && data.data.length > 0 ? (
                                data.data.map((e, index) => (
                                    <Link key={index} className="elon__item" to={`/elon/${e.event_id}`}>
                                        <img className="elon__item__img" src={`${link}/uploads/${e.event_img}`} alt={e.description} />
                                        <div className="elon__item__body">
                                            <h3>{e.body.split(' ').slice(0,7).join(' ')}</h3>
                                            <div className="elon__body__wrapper">
                                                <span><i className="fa-solid fa-user"></i> &nbsp; {e.user_name}</span>
                                                <span>{e?.user_proff || ''} &nbsp; </span>
                                                <span> <DateIcon /> &nbsp; {e.event_date}</span>
                                                <span><i className="fa-solid fa-clock"></i>&nbsp;{e.event_time}</span>
                                                <span>  {e.event_type === 'online' ? <OnlineIcon /> : <OfflineIcon />} &nbsp; {e.event_type}</span>
                                                <span><i className="fa-solid fa-eye"></i> &nbsp;{Math.floor(Math.random() * 100)}</span>
                                            </div>
                                        </div>
                                    </Link>
                            ))
                            ) : data.fetched && data.data && data.data.length === 0 ? (
                            <></>
                            ) : data.error ? (
                            <h2>Qandeydur xatolik sodir bo'ldi, iltimos birozdan so'n harakat qilib ko'ring :(</h2>
                            ) : (
                            <h2>Yuklanmoqda</h2>
                            )
                        }
                        </div>
                    </div>
                </div> */}
                <div className="paddinger footer">
                    <Footer />
                </div>
        </div>
    )
}

export default GetEvent;

