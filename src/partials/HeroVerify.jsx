import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';


function HeroValidate() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    
    e.preventDefault();
    
    document.cookie = 'validationcookie=success; max-age=0;'; 
    var cookies = document.cookie.split(';')[0];
    var userId=cookies.split('=')[1]
    if(cookies.split('=')[0]!='userId'){
        userId=document.cookie.split(';')[1].split('=')[1];
    }

    axios.get('https://api.alvin.credit/users/validate/'+userId+'/'+document.getElementById('verify-code').value)
    .then(function (response) {
      // handle success
      navigate("/Dashboard",{replace:true});
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

        <link rel="stylesheet" type="text/css" href="style.scss"></link>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"></link>

        <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Verify</span>
            <span className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"></span></h1>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Please enter your 6-Digit Code to continue</h2>
              <div className="max-w-sm mx-auto">
                <div class="form-center">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <input class="verify-code" id="verify-code" type="text" maxLength="6" onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}  className="form-input w-full text-gray-800 text-center h1" placeholder="000000" required />
                    </div>
                  </div>
                  <button id="dashb" type="submit" className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0">Verify</button>
                
              </form>
              </div>
              </div>
              

        </div>
        </div>
        </div>
        </div>
    </section>
  );
}

export default HeroValidate;

