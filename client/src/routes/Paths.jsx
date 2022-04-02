import React from 'react'
import {BrowserRouter,  Routes, Route} from 'react-router-dom'
import ClientPage from '../components/ClientPage.jsx'

const Paths = () => {
  return (
    <BrowserRouter>
    <Routes >
    <Route path="/" element={<ClientPage></ClientPage>} ></Route>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "
    </Routes>
  </BrowserRouter>
  )
}

export default Paths