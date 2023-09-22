import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import { useUser } from '../Context/UserContext'
import Home from '../Home/Home'
import Image from '../Home/Image'
import About from '../Home/About'
import DragList from '../Imgesss/DragList'
function Index() {
  const user = useUser();
  return (
    <>
<Routes>
  <Route path='/' element={<Home />} />
  <Route element={user ? <DragList /> : <Login />} path="/image" />
  <Route path="/login" element={<Login />} />
  <Route path='/signup' element={<Signup />}/>
  <Route path='/about' element={<About />} />
</Routes>
    </>
  )
}

export default Index