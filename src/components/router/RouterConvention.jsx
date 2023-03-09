import Home from '../page/Home/Home';
import AllUser from '../page/AllUser/AllUser';
import CreateUser from '../page/CreateUser';
import EditUse from '../page/EditUse';
import ViewUser from '../page/ViewUser';
import NotFound from '../page/NotFound';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import NavBar from '../semantics/Navbar/NavBar';

export default function RouterConvention() {
  return (
        <Routes>
            <Route index element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/all' element={<AllUser/>}/>
            <Route path='/add' element={<CreateUser/>}/>
            <Route path='/edit/:id' element={<EditUse/>}/>
            <Route path='/view/:id' element={<ViewUser/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>   
  )
}

