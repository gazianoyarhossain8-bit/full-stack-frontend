import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRoute = () => {
        window.location.href = "/login";
    }

    const handleRegister = async(e) => {
        e.preventDefault()
        try {
            await axios.post("https://full-stack-backend-rosy.vercel.app/auth/register",
                {
                    name,
                    email,
                    password
                });
                alert("Register success");
                navigate("/login")
            }catch(err){
                alert(err.response?.data?.message ||
                    "Register failed" )
                }
            };

  return (
    <form onSubmit={handleRegister}>
        <h1>Register</h1>
        <label>Name
        <input type='text'onChange={(e) => setName(e.target.value)} className='bg-white shadow-lg'/>

        </label>
        <label>Email
        
        <input type='email'placeholder='email..'onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>Password
        <input type='password'placeholder='password..'onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button>Register</button><br/>
        <button onClick={handleRoute}>ragister to login</button>
    </form>
  )
}

export default Register