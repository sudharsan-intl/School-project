import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Signup(props){
    
const[iuser,setiuser]=useState()
const[ipass,setipass]=useState()
const up=props.up
const setup =props.setup
const navigate =useNavigate()
function handleuser(event){

      setiuser(event.target.value)



}
function handlepass(event){
     setipass(event.target.value)

}




function handleadd(){


    if(iuser && ipass)
    {
       setup([...up,{username:iuser,password:ipass}])
        alert("SigUp sucess")
        navigate("/")
    }else{
         alert("SigUp Failed please try again ")
    }

}
        











return (
  <div className="w-full h-screen bg-gradient-to-b from-indigo-950 via-purple-200/10 to-pink-400 flex items-center justify-center">
    <div className="flex-col flex items-center justify-center backdrop-blur-md bg-white/10 border border-white/20 p-6 shadow-lg rounded-lg mt-2">
      <input value={iuser} onChange={handleuser}
        className="p-2 m-2 rounded-md placeholder:text-black bg-transparent text-black border border-gray-500 w-64"
        placeholder="username"
      />
      <input value={ipass} onChange={handlepass}
        className="p-2 m-2 rounded-md placeholder:text-black bg-transparent text-black border border-gray-500 w-64"
        placeholder="password"
      />
      <button onClick={handleadd}    className="border border-gray-500 bg-blue-500 text-white p-2 rounded-md mt-4 w-64">
        SignUp
      </button>
      <h1>Do you have account?<Link className="underline" to={"/"}>Login</Link></h1>
    </div>
  </div>


)



}
export default Signup