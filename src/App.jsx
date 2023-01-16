import React from 'react'
import './App.css'
import SignUp from './UserSignUp/SignUp/SignUp'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './UserSignUp/Login/Login';
import Profile from './Modules/Profile/profile';
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>

     {/* <Route path='/Signup' element={<SignUp />} /> */}
     <Route path='/' element={<SignUp />} />
     <Route path='/login' element={<Login/>} />
     <Route path='/profile' element={<Profile/>} />
    

    </Routes>
    </BrowserRouter>    
    </>
    )
}

export default App
