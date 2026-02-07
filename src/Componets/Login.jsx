import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

axios.defaults.withCredentials = true;


const Login = () => { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleLogin = async (e) => {
      e.preventDefault();
    
      try {
        const res = await axios.post(
          "https://full-stack-backend-rosy.vercel.app/auth/login",
          {
            email: email.trim(),
            password: password.trim(),
          },
          {
            withCredentials: true,
            timeout: 15000,
            headers: { "Content-Type": "application/json" },
          }
        );
        alert(res.data.message || "Login successful");
        navigate("/userscurd");
      } catch (err) {
        alert(
          err.response?.data?.message ||
          err.message ||
          "Please try again later"
        );
      }
    };
    
  return (
  
    <form onSubmit={handleLogin} className='flex flex-col gap-4
    w-96 mx-auto mt-20 shadow-lg p-10 rounded-lg'>
      <h1 className='mx-auto'>Login</h1>
    <input placeholder='email...' onChange={e => setEmail(e.target.value)}
    className='shadow-lg rounded-xl'/>
    <input type='password'placeholder='password...' onChange={e => setPassword(e.target.value)}
    className='shadow-lg rounded-xl'/>
    <button type='submit' className='bg-blue-900 w-16 mx-auto rounded-lg text-cyan-50'>Login</button>

    <p className='mt-10'>Account nahi hai?
        <span className='bg-blue-600 rounded-xl w-52'onClick={() => navigate("/register")}>Register karo</span>
      </p>
    
    </form>
    
  )
}

export default Login