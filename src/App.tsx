import { useState } from "react";
import NavBar from "./components/NavBar";
import BottomNav from "./components/BottomNavBar";
import ConsultOthers from "./pages/ConsultOther";
import ImpPerformance from "./pages/ImpPerformance";
import StartBusiness from "./pages/StartBusiness";
import Home from "./pages/Home";
import More from "./pages/More";
import TryFree from "./pages/TryFree";
import Login from "./pages/Login";


import { Route, Routes } from 'react-router-dom'

function App() {

  return (
  <>
    <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/consultOther' element={<ConsultOthers/>}></Route>
          <Route path='/impPerformance' element={<ImpPerformance/>}></Route>
          <Route path='/startBusiness' element={<StartBusiness/>}></Route>
          <Route path='/more' element={<More/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/tryFree' element={<TryFree/>}></Route>
        </Routes>
      <BottomNav/>
  </>
  )
}
export default App;
