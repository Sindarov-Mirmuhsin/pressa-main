import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './main.css'
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../context/context";
import { useEffect } from "react";

const Login = () =>{
    const [check, setCheck] = useState(false)
  
    const navigate = useNavigate()
    const {link, token, setToken} = useContext(Context)

    const handleSubmit = e =>{
        e.preventDefault();
        const {login, parol} = e.target
        
        fetch(`${link}/login`,{
            method:'POST',
            body: JSON.stringify({
                username: login.value,
                password: parol.value
            })
        })
        .then(res => res.json())
        .then(result =>{
            if(result.status === 200){
                setToken(result.token);
                alert('Muvaffaqiyatli tizimga kirildi')
            }
            setToken(false);
            alert('Login yoki parol xato')
        })
        .catch(() => alert('Xatolik yuz berdi, iltimos keyinroq urinib ko`ring :('))

        e.target.reset()
    }

    useEffect(() =>{
        if(token){
            navigate('/')
        }
    }, [token])

     return (
        <div className="login__wrapper">
            <div className="login__content">
                <h2 className="fw-bold">Tizimga kirish</h2>
                <form onSubmit={handleSubmit} className="login__form" >
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"> <i className="fa-solid fa-user"></i> </span>
                        <input type="text" name="login" className="form-control" placeholder="Login" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-key"></i></span>
                        <input type="text" name="parol" className="form-control" placeholder="Parol" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <p>Parolni unutdingizmi?</p>
                    <button  className="btn btn-info w-100 mb-2" type="submit">Kirish</button>
                </form>
            </div>
        </div>
    )
}

export default Login;