import React, { useState } from 'react'
import { useContext } from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider';
import "../Styles/Login.css"
import pc6 from "../assets/key.png";



const Login=()=>{
    const {login,loginwithGoogle} =useContext(AuthContext);
      const [error,serError] =useState("error");
const location =useLocation();
const navigate = useNavigate();
const from = location.state?.from?.pathname || "/";



    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
         login(email,password).then((userCredential)=>{
          const user = userCredential.user;
         alert("Login successfull ")
         navigate(from,{reeplace:true})

         })
         .catch((error)=>{
          const errorCode = error.code;
          const errorMessage = error.message;
         })
    }


    const handleRegister=()=>{
        loginwithGoogle().then((result)=>{
            const user = result.user;
            alert("Sign up successfully")
            navigate(from,{replace:true})
        }) .catch((error)=>{
            // const errorCode = errorCode;
            const errorMessage = error.message;
            serError(errorMessage)
           })
    }


    return(
        <section class="flex flex-col md:flex-row h-screen items-center">

<div class="background-img">
    <img src={pc6} alt="" class="w-full h-full object-cover"></img>
  </div>

  <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

    <div class="w-full h-100">


      <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Log in Form</h1>

      <form onSubmit={handleLogin} class="mt-6" action="#" method="POST">
        <div>
          <label class="block text-gray-700">Email Address</label>
          <input type="email" name="email" id="" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required></input>
        </div>

        <div class="mt-4">
          <label class="block text-gray-700">Password</label>
          <input type="password" name="password" id="" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required></input>
        </div>

        <div class="text-right mt-2">
          
        </div>
            <p>If you have an account.Please<Link to="/sign-up" className='text-blue-600'>Sign up</Link>Here</p>
        <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Sign up</button>
      </form>

      <hr class="my-6 border-gray-300 w-full"></hr>
        <div className='busy'>
            <button onClick={handleRegister}>Login with Google</button>
        </div>
     


    </div>
  </div>

</section>
    )
}
export default Login;