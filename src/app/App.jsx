import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/homePage/homePage'
import LoginPage from '../pages/loginPage/loginPage'

const App = () => {
  return (
    <>

     <Routes>
     <Route  path='/' element={<LoginPage/>} />
      <Route  path='/' element={<HomePage/>} />
   
      </Routes> 
    </>
  )
}

export default App