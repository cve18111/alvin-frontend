import React, { useState } from 'react';
import Modal from '../utils/Modal';

import HeroImage from '../images/app.png';

function HeroKontakt() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Kontakt</span>
            <span className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"></span></h1>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Support 24/7 erreichbar.</h2>
              <div className="max-w-sm mb-8" data-aos="zoom-y-out" data-aos-delay="300"></div>

    
            {/* Kontaktformular */}
            <div id="contact-form" class="clearfix">
                <h1>Noch Fragen?</h1>
                <h2>Füll unser Hilfeformular aus mit möglichst vielen Informationen, damit wir dir so schnell wie möglich helfen können!</h2>
                <h2><b>Wir beantworten eure Fragen innerhalb von 24 Stunden</b></h2>
                <ul id="errors" class="">
                    <li id="info">Es sind einige Probleme mit deiner Form:</li>
                </ul>
                <p id="success">Danke für deine Nachricht! Wir werden dir bald antworten!</p>
                <form onSubmit={handleSubmit}>
                    <label for="name">Name: <span class="required">*</span></label>
                    
                    <input type="text" id="name" name="name" placeholder='Alvin Mustermann' required="required" ></input>
                    
                    <label for="email">Email Adresse: <span class="required">*</span></label>
                    <input type="email" id="email" name="email" placeholder="alvin@mail.com" required="required" />
                    
                   
                    
                    <label for="enquiry">Problem: </label>
                    <select id="enquiry" name="enquiry">
                        <option value="Allgemein">Allgemein</option>
                        <option value="Finanzen">Finanzen</option>
                        <option value="Support">Support</option>
                    </select>
                    
                    <label for="message">Nachricht: <span class="required">*</span></label>
                    <textarea id="message" name="message" placeholder="Deine Nachricht muss länger als 20 Zeichen sein!" required="required" minlength="20"></textarea>
                    
                    <span id="loading"></span>
                    <input type="submit" value="Senden" id="submit-button" />
                    <p id="req-field-desc"><span class="required">*</span> kennzeichnet ein Pflichtfeld</p>
                </form>
            </div>
        </div>
        </div>
        
        </div>
        
        </div>

    </section>
  );
}

export default HeroKontakt;

//const nodemailer = require('nodemailer');
import axios from 'axios';

function handleSubmit(e) {
  e.preventDefault();
  var emailF = document.getElementById('email').value;
  var nameF = document.getElementById('name').value;
  var messageF = document.getElementById('message').value;
  var enquiryF = document.getElementById('enquiry').value;

  axios.post('https://api.alvin.credit/contacts/create',{
    email: emailF,
    name: nameF,
    message: messageF,
    enquiry: enquiryF
  })
  .then(function (response) {
    console.log(response);
    
  })
  
  /* var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'alvingmbh@gmail.com',
      pass: 'Alvin1234'
    }
  });

  var mailOptions = {
    from: emailF,
    to: 'alvingmbh@gmail.com',
    subject: 'Diese Nachricht wurde mithilfe des Kontaktformulars gesendet: von '+nameF+' | Thema: '+enquiryF,
    text: messageF
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); */

}