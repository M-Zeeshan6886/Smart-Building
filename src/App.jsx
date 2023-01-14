import React from 'react'
import './App.css'
import SignUp from './UserSignUp/SignUp/SignUp'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './UserSignUp/Login/Login';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>

     {/* <Route path='/Signup' element={<SignUp />} /> */}
     <Route path='/' element={<SignUp />} />
     <Route path='/login' element={<Login/>} />
    

    </Routes>
    </BrowserRouter>    
    </>
    )
}

export default App
