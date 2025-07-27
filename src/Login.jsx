import { useState } from "react"
import { Link } from "react-router-dom"

import { useNavigate } from "react-router-dom"

function Login(props){
   
const[iuser,setiuser]=useState("")
const[ipass,setipass]=useState("")
const [ruser,setruser]=useState(true)
const up=props.up
const setup =props.setup
const navigate=useNavigate()
var userfound =false
function handleuser(event){

      setiuser(event.target.value)



}
function handlepass(event){
     setipass(event.target.value)

}

function handlelogin(){
    up.forEach(function(item){


             
  if(item.username == iuser && item.password == ipass)
  {
          console.log("sucess")
         userfound = true
              navigate("/weather")
  }
  if(userfound===false){
    console.log("false")
    setruser(false)
  }
        

    })

}


        











return (
  <div className="w-full h-screen bg-gradient-to-b from-sky-950 via-purple-200/10 to-red-400 flex items-center justify-center">
    
    <div className="flex-col flex items-center justify-center backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-lg rounded-lg mt-2">
       <h1 className="text-purple-400 font-semibold text-2xl p-2 m-1 ">Hey hi :)</h1>
         {ruser?"I will help you manage your  weather activities" :"please signup before you login"}
      <input value={iuser} onChange={handleuser}
        className="p-2 m-2 rounded-md placeholder:text-black bg-transparent text-black border border-gray-500 w-64"
        placeholder="username"
      />
      <input value={ipass} onChange={handlepass}
        className="p-2 m-2 rounded-md placeholder:text-black bg-transparent text-black border border-gray-500 w-64"
        placeholder="password"
      />
      <button  onClick={handlelogin}        className="border border-gray-500 bg-blue-500 text-white p-2 rounded-md mt-4 w-64">
        Login
      </button>
      <h1>Do you Want to create account?<Link className="underline" to={"/signup"}>SignUp</Link></h1>
    </div>
  </div>





)



}
export default Login