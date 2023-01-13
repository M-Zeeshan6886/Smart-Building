import React from 'react'
import './App.css'
import SignUp from './UserSignUp/SignUp/SignUp'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>

     {/* <Route path='/Signup' element={<SignUp />} /> */}
     <Route path='/' element={<SignUp />} />

    </Routes>
    </BrowserRouter>    
    </>
    )
}

export default App
