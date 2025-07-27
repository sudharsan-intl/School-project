import Login from "./Login.jsx"
import Signup from "./Signup.jsx"
import { BrowserRouter,  Route,  Routes, } from "react-router-dom"
import { useState } from "react"
import Weather from "./components/Weather.jsx"
import '@fortawesome/fontawesome-free/css/all.min.css';

function App(){
  const[up,setup]=useState([{username:"sudharsan",password:"1234"}])
 return(<div>














     <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login up={up} setup={setup} />}></Route>

            <Route path="/signup" element={<Signup up={up} setup={setup} />}></Route>

            <Route path="/weather" element={<Weather up={up} setup={setup} />}></Route>
    </Routes>
     
     
     
     
     
     </BrowserRouter>


 </div>)



}
export default App