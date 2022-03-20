import React from 'react'
import { Route,Routes } from 'react-router-dom'
// import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'

const App = () => {
  return (
    <>
      {/* <Navbar /> */}

      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App