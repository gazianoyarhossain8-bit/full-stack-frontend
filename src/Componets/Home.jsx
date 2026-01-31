import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home(){
  const startNav = useNavigate();

  const handleStart = () => {
    startNav('/register');
  }
  return (
    <div className='h-screen flex justify-center items-center bg-gradient-to-r from-green-400 to-red-500 flex-col'>
        <h1 className='block mx-auto bg-green-600 text-white items-center p-6 text-3xl w-96 
         rounded-lg'>CRUD MNAGEMENT APP</h1>
        <p className='block mx-auto bg-red-600 text-white text-center mt-3 w-80 p-4 rounded-lg'>Mange your users easily</p>
        <button onClick={handleStart} className='block mx-auto bg-blue-500 w-24 mt-3 p-3 rounded-lg'>START</button>
    </div>
  )
}

export default Home