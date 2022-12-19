import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../context/context";
import {OnlineIcon, OfflineIcon, DateIcon, BolimIcon, NameIcon} from '../../functions/index'
import Header from "../header/header";
import Image1 from '../../files/img1.png'
import Image2 from '../../files/img2.png'
import './homeItem.css'
import Footer from "../footer/footer";

const Main = () => {
  const {link} = useContext(Context);
  const [date, setDate] = useState('')
  const [bolim, setBolim] = useState('')
  const [signal, setSignal] = useState('')
  const [name, setName] = useState('')
  
  const [data, setData] = useState({
    fetched: false,
    error: false,
    data: {},
  });

  const [data1, setData1] = useState({
    fetched: false,
    error: false,
    data: {},
  });

  
  useEffect(() => {
      fetch(`${link}/categories`)
        .then((res) => res.json())
        .then(result =>{
          if(result.data){
            setData({fetched: true, data: result.data})
          }
        })
        .catch(() => setData({ error: true, fetched: false }));

        fetch(`${link}/events`)
          .then((res) => res.json())
          .then(result =>{
            if(result.data){
              setData1({fetched: true, data: result.data})
            }
          })
          .catch(() => setData1({ error: true, fetched: false }));
  }, []);

  const handleChange = e =>{
    setDate(e.target.value)
  }

  const BolimHandler = e =>{
    setBolim(e.target.value)
  }
  const SignalHandler = e =>{
    setSignal(e.target.value)
  }

  const nameChanger = e  =>{
    setName(e.target.value)
  }

  const HandleFilter = () =>{
    console.log({bolim: bolim, signal, name});
  }

  return (
    <div className="my__container">
       <div className="paddinger hero">
          <Header />
            <div className="hero__text">
                Eng so’ngi master klasslar va tadbirlar bizning saytda
            </div>

            <div className="hero__filter">
            <FormControl fullWidth disabled>
              <InputLabel id="demo-simple-select-label"> <DateIcon /> 22 / 02 / 2022</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={date}
                label='   22 / 02 / 2022  12'
                onChange={handleChange}
              >
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"> <BolimIcon /> Bo’lim tanlang</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={bolim}
                label=" Bo’lim tanlang icon"
                onChange={BolimHandler}
              >
                <MenuItem disabled selected value={false}> Bo'lim tanlang</MenuItem>
                {
                    data.fetched && data.data.length>0 ?(
                        data.data.map((e, key) =>(
                          <MenuItem key={key} value={e.category_id -0}> {e.category_name}</MenuItem>
                          ))
                          ):(
                              <MenuItem value={false}> Bo'limlar hali qo'shilmagan </MenuItem>
                            )
                }
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"> <OnlineIcon/> Online / Offline</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={signal}
                label=" Bo’lim tanlang icon"
                onChange={SignalHandler}
              >
                <MenuItem value={10}> <OnlineIcon /> Online</MenuItem>
                <MenuItem value={20}> <OfflineIcon /> Offline</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"> <NameIcon/> Ism-familya</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={name}
                label="ism-familya icon"
                onChange={nameChanger}
              >
                <MenuItem disabled selected value={false}> Ism-familya tanlang</MenuItem>
                {
                    data1.fetched && data1.data.length>0 ?(
                        data1.data.map((e, key) =>(
                          <MenuItem key={key} value={e.event_id -0}> {e.user_name}</MenuItem>
                          ))
                          ):(
                              <MenuItem value={false}> E'lonlar hali qo'shilmagan </MenuItem>
                            )
                }
              </Select>
            </FormControl>
            <button className="search__btn" onClick={HandleFilter} >Izlash</button>
            </div>
       </div>
       <div className="paddinger main">
          <h2>Oxirgi e’lonlar</h2>
          <div className="elon__wrapper">
              {
                data1.fetched && data1.data && data1.data.length > 0 ? (
                    data1.data.map((e, index) => (
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
                ) : data1.fetched && data1.data && data1.data.length === 0 ? (
                  <></>
                ) : data1.error ? (
                  <h2>Qandeydur xatolik sodir bo'ldi, iltimos birozdan so'n harakat qilib ko'ring :(</h2>
                ) : (
                  <h2>Yuklanmoqda</h2>
                )
              }
          </div>

          <div className="control__wrapper">
            <div className="control__item">
                <h1>E’LONLARINGIZNI BIZNI SAYTDA BERING</h1>
                <img src={Image1} alt="E’LONLARINGIZNI BIZNI SAYTDA BERING" />
            </div>

            <div className="control__item">
                <h1>ENG SO’NGI MASTER KLASLAR BIZNING SAYTDA</h1>
                <img src={Image2} alt="ENG SO’NGI MASTER KLASLAR BIZNING SAYTDA" />
            </div>
          </div>
       </div>
       <footer className="paddinger footer">
          <Footer />
       </footer>
    </div>
  );
};

export default Main;
