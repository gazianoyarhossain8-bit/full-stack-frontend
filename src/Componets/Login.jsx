import { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Login = () => { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleLogin = async(e) =>{
      e.preventDefault()
      try {
        const res = await
        axios.post("https://full-stack-backend-rosy.vercel.app/auth/login",{
          email: email,
          password: password,
        });

//token save
console.log("login response", res.data)
        localStorage.setItem("token",
          res.data.token
        );
        navigate("/userscurd");
      } catch (err) {
        alert(err.response?.data?.message ||
          "Login failed")
      }
    };
  return (
  
    <form onSubmit={handleLogin} className='flex flex-col gap-4
    w-96 mx-auto mt-20 shadow-lg p-10 rounded-lg'>
      <h1>Login</h1>
    <input placeholder='email...' onChange={e => setEmail(e.target.value)}
    className='shadow-lg'/>
    <input type='password'placeholder='password...' onChange={e => setPassword(e.target.value)}
    className='shadow-lg'/>
    <button type='submit'>Login</button>

    <p className='mt-10'>Account nahi hai?
        <span className='bg-blue-600'onClick={() => navigate("/register")}>Register karo</span>
      </p>
    
    </form>
    
  )
}

export default Login