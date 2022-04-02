import React from 'react'
import {BrowserRouter,  Routes, Route} from 'react-router-dom'
import ClientPage from '../components/ClientPage.jsx'
import LoginPage from '../components/LoginPage.jsx'

const Paths = () => {
  return (
    <BrowserRouter>
    <Routes >
    <Route path="/clients" element={<ClientPage></ClientPage>} ></Route>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "
    <Route path="/" element={<LoginPage></LoginPage>} ></Route>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "
    <Route path="/login" element={<LoginPage></LoginPage>} ></Route>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "

    </Routes>
  </BrowserRouter>
  )
}

export default Paths