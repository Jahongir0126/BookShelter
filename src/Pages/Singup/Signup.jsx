import React from 'react'
import './Singup.scss'
import logo from '../../img/Login_Logo.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Signup() {

    const [userData, setUserData] = useState({})
    function handleInput(e) {
        setUserData(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    
    function handleSignup(e) {
        e.preventDefault();
        fetch("https://n36-todolist.herokuapp.com/" + "signup", {

            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.token);
                localStorage.setItem("token", data.token)
            })
        

    }

    return (
        <>
            <section>
                <div className="container">
                    <div className=" wrapper">
                        <img src={logo} alt="logo" />

                        <form className="form w-25" onSubmit={handleSignup}>
                            <input
                                type="text"
                                placeholder='Enter username'
                                className='form-control'
                                name="userName"
                                onChange={handleInput}
                            />

                            <input
                                type="password"
                                placeholder='Enter password'
                                className='form-control mt-4'
                                name='userPassword'
                                onChange={handleInput}
                            />
                            <button type="submit" className="btn btn-light w-100 mt-5 mb-3 text-primary">LOGIN</button>
                            <Link className={'text-white '}>Forgot password</Link>
                        </form>

                    </div>
                </div>
            </section>
        </>
    )
}
