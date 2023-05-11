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
import ChatBotAi from "./pages/ChatBotAi";

import { Route, Routes } from 'react-router-dom'

function App() {
// same route elemets for now
  return (
  <>
    <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/consultOther' element={<StartBusiness/>}></Route>
          <Route path='/impPerformance' element={<StartBusiness/>}></Route>
          <Route path='/startBusiness' element={<StartBusiness/>}></Route>
          <Route path='/more' element={<StartBusiness/>}></Route>
          <Route path='/bot' element={<ChatBotAi/>}></Route>
          <Route path='/login' element={<StartBusiness/>}></Route>
          <Route path='/tryFree' element={<StartBusiness/>}></Route>
        </Routes>
      <BottomNav/>
  </>
  )
}
export default App;
