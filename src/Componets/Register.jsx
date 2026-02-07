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
    <form onSubmit={handleRegister} className='flex flex-col md:flex-row gap-5 shadow-xl items-center rounded-xl w-96 h-96 block mx-auto'>
        <h1 className='block mx-auto bg-yellow-500 w-24 rounded-xl text-center'>Register</h1>
        <label className=' flex gap-3'>Name:
        <input type='text' placeholder='name'onChange={(e) => setName(e.target.value)} className='shadow-lg rounded-md'/>

        </label>
        <label className=' flex gap-3'>Email:
        
        <input type='email'placeholder='email..'onChange={(e) => setEmail(e.target.value)} className='shadow-lg rounded-md'/>
        </label>
        <label className=' flex gap-3'>Password:
        <input type='password'placeholder='password..'onChange={(e) => setPassword(e.target.value)} className='shadow-lg rounded-md'/>
        </label>
        <button className='bg-blue-600 rounded-xl w-20 mx-auto'>Register</button><br/>
        <button onClick={handleRoute} className='bg-green-700 rounded-xl w-52 mx-auto h-12'>ragister to login</button>
    </form>
  )
}

export default Register