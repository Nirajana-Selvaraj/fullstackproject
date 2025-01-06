import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Login(){

var [email,setEmail]=useState("");
var[password,setPassword]=useState("")
var navigate=useNavigate()
var login=async(event)=>{
    event.preventDefault();
var req=await axios.post("http://localhost:3001/login",{
email,password
});
console.log(req);
var isLoginSuccessfull=req.data.isLoggedIn
console.log(isLoginSuccessfull);
if(isLoginSuccessfull){
console.log("login successfulll....");
navigate('/home');
}
else{
    alert("invalid..")
    console.log({message:"invalid email or password..",isLoggedIn:false});
}

}
    return(
    <>
    <div className="login-container">
    <h3>Welcome to login page</h3>
    <form onSubmit={login}>
    <label className='login'>
    Email:<input type="text" placeholder="enter your email"  id="email" value={email}onChange={(e)=>setEmail(e.target.value)}required/>
    </label>
    <label className='login'>
    Password:<input type="password" placeholder="enter your password" id="password" value={password}onChange={(e)=>setPassword(e.target.value)} required/>
    </label>
    <button >Submit</button>
    </form>
    <p>Are you do not have account</p>
    <button ><Link to='/signup'>SignIn</Link></button>
    </div>
    </>
    );
}
export default Login;