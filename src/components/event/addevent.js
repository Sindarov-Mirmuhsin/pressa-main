import React, { useEffect, useRef } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import {HomeICon, UploadIcon} from '../../functions/index'
import './event.css'
import InputMask from 'react-input-mask';
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../context/context";
const AddEvent = () =>{
    const {link} = useContext(Context)
    const [editedImg, setEditedIMg] = useState({
        loaded: false,
        pic: false
      })
    const [add, setAdd] = useState(false)
    const [state, setState] =useState(false)
    const [signal, setSignal] =useState(false)
    const [categories, setCategories] = useState({ fetched: false, error: false, data:[]})
    const [subCategories, setSubCategories] = useState({ disabled: true, category_id: false, data:[]})
    const [modal, setModal] = useState(false);
    const AddEvent = e =>{
        e.preventDefault();
        const {postDate, postTime, postCategory, postSubcategory, postLink,yuridicName, userName, userProff, number, alsoNumber,postTitle,postDescription, postImg, postBody} = e.target;
       
        const formdata = new FormData();
        formdata.append('body', postBody.value);
        formdata.append('image', postImg.files[0]);
        formdata.append('description', postDescription.value);
        formdata.append('event_link', postLink.value);
        formdata.append('event_type', signal ? 'offline' :'online');
        formdata.append('event_date', postDate.value);
        formdata.append('event_time', postTime.value);
        formdata.append('user_role', state ? 'Yuridik' : 'Jismoniy')
        formdata.append('user_name', userName.value);
        formdata.append('user_proff', userProff.value);
        formdata.append('company_name', yuridicName.value);
        formdata.append('phone_number', number.value);
        formdata.append('phone_second', alsoNumber.value);
        formdata.append('sub_category_id', postSubcategory.value)
        formdata.append('category_id', postCategory.value)

        fetch(`${link}/events`, {method:'POST',body: formdata})
        .then(response => response.json())
        .then(result => {
            if(result.data){
                setModal(true)
            }
        })
        .catch(() => {
            alert(`e'lon joylashda xatolik yuz berdi iltimos keyinroq harakat qilib ko'ring :(`)
            setAdd(false)
        })
    }
    useEffect(() =>{
        setEditedIMg({loaded:false, pic:false});
        setSignal(false)
        setState(false)
    }, [add])

    useEffect(() =>{
        fetch(`${link}/categories`)
        .then(response => response.json())
        .then(result => {
            if(result.data){
              setCategories({fetched: true, data: result.data})
              setSubCategories({disabled: false, data: result.data[0].sub_categories})
              return
            }  
            alert('Kategoriyalar kelishida xatolik')
          })
          .catch(() => setCategories({ error: true, fetched: false }));
    }, [])

    useEffect(() =>{
        if(modal){
            setAdd(false)
            setTimeout(() => {
                setModal(false)
            }, 2000);
        }
    }, [modal])

    const categoryChange = e =>{
        const find = categories.data.find(a => a.category_id === e.target.value-0);
        setSubCategories({disabled: false, data: find ?  find.sub_categories :[]})
    }
    return(
        <div className="my__container">
                <div className="paddinger blue__bg">
                    <Header />
                </div>
                <div className="paddinger add__event__main">
                    <div className="add__event__main__hero">
                    <a href="/"><HomeICon /> </a>
                    <a href="/add-elon">e'lon berish</a>
                    </div>

                   <div className="add__event__form__wrapper">
                    <h1 className="add__event__title">E'lon berish <span onClick={() => setAdd(!add)} className="btn btn-primary">+</span> </h1>
                    {
                        add ? (
                            <form className="add__event__form" encType="multipart/form-data" onSubmit={AddEvent}>
                                <div className="form__box">
                                    <h2>Vaqt va yo’nalishni tanlang</h2>
                                    <div>
                                        <label className="form__label">O’tkaziladigan sanani kiriting</label>
                                        <div className="d-flex mt-2">
                                            <input name='postDate' className="w-25 form-control" type="date" required/>
                                            <input name="postTime" className="w-auto form-control ms-4" type="time" required/>
                                        </div>
                                    </div>

                                <div className="d-flex justify-content-between">
                                        <div className="w-50 me-5">
                                                <label className="form__label">Yo’nalishni belgilang</label>
                                                <select className="form-select" name="postCategory" onChange={categoryChange} required>
                                                {
                                                    categories.fetched && categories.data.length>0 ?(
                                                        categories.data.map((e, key) =>(
                                                            <option key={key} value={e.category_id}>{e.category_name}</option>
                                                            ))
                                                            ):(
                                                                <></>
                                                                )
                                                }
                                                </select>
                                        </div>
                                        <div className="w-50 ms-5">
                                            <label className="form__label">Ichki yo’nalish</label>
                                            <select className="form-select" name="postSubcategory" disabled={subCategories.disabled} required>
                                            {
                                                    !subCategories.disabled && subCategories.data.length>0 ?(
                                                        subCategories.data.map((e, key) =>(
                                                            <option key={key} value={e.sub_category_id}>{e.sub_category_name}</option>
                                                            ))
                                                            ):(
                                                                <></>
                                                                )
                                                }
                                            </select>
                                        </div>
                                </div>

                                <div className="d-flex justify-content-between">
                                        <div className="w-50 me-5">
                                        <label className="form__label">Tadbir turi</label>
                                        <div className="btn-group d-block " role="group" aria-label="Basic radio toggle button group">
                                            <input onChange={() =>setSignal(false)} type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked={!signal}/>
                                            <label className="btn btn-outline-primary w-50" htmlFor="btnradio1">Online</label>

                                            <input onChange={() =>setSignal(true)} type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" checked={signal} />
                                            <label className="btn btn-outline-primary w-50" htmlFor="btnradio2">Offline</label>
                                        </div>
                                        </div>
                                        <div className="w-50 ms-5">
                                            <label className="form__label">Link kiriting</label>
                                            <input className="form-control" type="text" placeholder="link kiriting" name="postLink" required/>
                                        </div>
                                </div>
                                </div>
                                <h2 className="mt-5 mb-5">Tashkilotchi</h2>
                                <div className="d-flex justify-content-between w-50 ps-5 pe-5">
                                    <label htmlFor="jismoniy" >Jimoniy shaxs</label>
                                    <input id="jismoniy" onChange={() => setState(false)} className="me-5" type="radio" name="name1" checked={!state} required/>
                                    <label className="ms-5" htmlFor="yuridik">Yuridik shaxs</label>
                                    <input id="yuridik" onChange={() => setState(true)} className="form-check-input" type="radio" name="name1" required/>
                                </div>

                                <div className="form__box form__box__wrapper">
                                    <div className="w-50 form__box__item">
                                    <label className="form__label">Yuridik nomi</label>
                                    <input className="form-control" type="text" placeholder="Yuridik nomi" name="yuridicName" required/>
                                    </div>
                                    <div className="w-50 form__box__item">
                                    <label className="form__label">Ism sharifi</label>
                                    <input className="form-control" type="text" placeholder="Ism sharifi" name="userName" required/>
                                    </div>
                                    <div className={`${state ? 'w-50 form__box__item' :'d-none'}`}>
                                    <label className="form__label">Professiya</label>
                                    <input className="form-control" type="text" placeholder="Professiya" name="userProff" required={state}/>
                                    </div>
                                    <div className="w-50 form__box__item">
                                        <label className="d-block ms-2 form__label" >Telefon raqami</label>
                                        <InputMask name="number" className="form-control"  mask="+\9\9\8 99 999 99 99" maskChar="*" placeholder='Telefon raqam' required/>
                                    </div>
                                    <div className="w-50 form__box__item">
                                        <label className="d-block ms-2 form__label" >Qo'shimcha telefon raqami</label>
                                        <InputMask name="alsoNumber" className="form-control"  mask="+\9\9\8 99 999 99 99" maskChar="*" placeholder='Qo`shimcha telefon raqam' required/>
                                    </div>
                                </div>
                                <div className="form__box">
                                    <h2>Post</h2>
                                    <input className="form-control" name="postTitle" type="text" placeholder="Mavzu sarlavhasi" required/>

                                    <div>
                                        <label className="form__label mt-5 mb-3">Description</label>
                                        <input className="form-control" name="postDescription" type="text" placeholder="Description" required/>
                                    </div>

                                    <div>
                                        <label className="form__label mt-4">Rasm yuklash</label>
                                        <div className="image__uploader">
                                        <label className="edit__camera__button">
                                            <span> <UploadIcon /> upload img</span>
                                                <input id="image" name="postImg" onChange={e => setEditedIMg({loaded:true, pic: e.target.files[0].size / 1024 > 2000 ? false : window.URL.createObjectURL(e.target.files[0])  })} className={`event_pic`} type="file" accept="image/*;capture=camera" required/>
                                        </label>
                                            {
                                                editedImg.loaded && editedImg.pic ? (
                                                    <div className="image__wrapper">
                                                    <img className="edit__button__img" src={editedImg.pic} alt="" />
                                                    <label htmlFor="image"><i  className="fa-solid fa-square-pen"></i></label>
                                                    </div>
                                                ):(
                                                    <></>
                                                )
                                            }
                                        </div>
                                        <label className="alert__label">Yuklanyotgan rasm hajmi 2 mb dan oshmasin</label>
                                    </div>

                                    <div>
                                        <label className="form__label mb-2">Mavzu matni</label>
                                        <textarea className="form-control" name="postBody"  cols="30" rows="10" placeholder="Mavzu matni ..." required></textarea>
                                    </div>

                                    <div className="d-flex button__wrapper">
                                        <button onClick={() => setAdd(false)}>Bekor qilish</button>
                                        <button type="submit">E'lonni yuborish</button>
                                    </div>
                                </div>
                            </form>
                        ): (
                            <></>
                        )
                    }
                   </div>

                    {
                        modal ? (
                            <div className="modal__wrapper">
                                <div className="modal__content">
                                    <p onClick={() =>setModal(false)}>+</p>
                                    <h2>Sizning e’loningiz yuborildi</h2>
                                    <span>Yaqin soatlar ichda admin tomonidan tekshirib chiqladi va saytda e’lon qilinadi!</span>
                                    <button onClick={() =>setModal(false)}>ok</button>
                                </div>
                            </div>
                        ):(
                            <></>
                        )
                    }
                    
                </div>
                <div className="paddinger footer">
                    <Footer />
                </div>
        </div>
    )
}

export default AddEvent;