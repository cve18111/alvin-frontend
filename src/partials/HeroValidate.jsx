import { Query } from 'mongoose';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HeroValidate() {


  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  var userId = urlParams.get('id')
  //könnte aus sicherheitsgründen im backend angepasst werden bei get path
  var secret = urlParams.get('base');
  //var secret;
  var qrcodePath;

  if(qrcodePath==null){

  axios.get('https://api.alvin.credit/users/path/'+userId)
    .then(function (response) {
      qrcodePath=response.data.path;  
      //secret=response.data.secret;
      document.getElementById("qr-code").innerHTML +=
      
      "<img class=\"child\" src="+qrcodePath+">";
    
        //remove img1
        
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
      
    });
    console.log(qrcodePath);

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
      <br/><br/>
        <link rel="stylesheet" type="text/css" href="style.scss"></link>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"></link>

        <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Two Factor Authentification</span>
            <span className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"></span></h1>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Scan the following QR-Code with your Google Authentificator app to continue</h2>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300"></div>
          
             
              <div class="center parent "id="qr-code"></div><br/><br/><br/><br/><br/><br/>
              <h2 className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Or paste the following Code in your Google Authentificator app</h2>
              <p id="code"className="smallf"><b>{secret}</b></p><br/>
              
              <Link id="dashb" className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" to="/signin">Continue</Link>
                

        </div>
        </div>
        </div>
    </section>
  );
}

export default HeroValidate;