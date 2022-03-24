import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import Aavahan2k19 from './pages/2k19/Aavahan2k19'
import Home from './pages/home/Home'

const App = () => {
  return (
    <>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/2k19' element={<Aavahan2k19/>}/>
      </Routes>
    </>
  )
}

export default App