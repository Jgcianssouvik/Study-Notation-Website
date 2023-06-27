import "./App.css";
import Navbar from './components/Navbar';

import { Route,Routes } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import { useState } from "react";


import PrivateRoute from './components/PrivateRoute'

function App() {

  const [isLoggedIn,setIsLoggedIn]=useState(false);

// useEffect(()=>{
// console.log("hey inside App");
// setisLoggedIn(true);
// console.log("hey inside App-2");
// })


  return (

    <div className="w-full h-full bg-black flex flex-col">

      <Navbar  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} className=" "/>

<Routes>

<Route path='/'element={<Home isLoggedIn={isLoggedIn}/>}/>
<Route path='/login'element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
<Route path='/signup'element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
<Route path='/dashboard'element={<PrivateRoute isLoggedIn={isLoggedIn} ><Dashboard/></PrivateRoute>}/>

</Routes>

    </div>
  );
}

export default App;
