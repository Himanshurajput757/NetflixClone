import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { Route, Routes, BrowserRouter } from 'react-router';

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
