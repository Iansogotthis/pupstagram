import { Route, Routes } from "react-router-dom";
import { useState } from 'react'
import "./App.css";

import SignUpPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
// ANY component that is rendered by a route, should be stored in the 
// pages folder. Every page is like an app component
import userService from "./utils/userService";
import FeedPage from './pages/FeedPage/FeedPage'

function App() {
  // the userService.getUser() when the page loads it goes into localstorage and looks for a jwt
  // token, decodes and sets it in state
  const [user, setUser] = useState(userService.getUser())

  function handleSignUpOrLogin(){
    // we call this function after userService.login(), or userService.signup()
    // in order to get the token sent back from express and store the decoded token in the state
    setUser(userService.getUser())
  }
  return (
    <>
    <nav>pupstagram2</nav>
     <Routes>
      <Route path="/" element={<FeedPage />} />
      <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
      <Route path='/signup' element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
 
    </Routes>
     </>
   
  );
}

export default App;
