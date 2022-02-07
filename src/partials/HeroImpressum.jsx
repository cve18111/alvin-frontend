import React, { useState } from 'react';
import Modal from '../utils/Modal';

import HeroImage from '../images/app.png';

function HeroImpressum() {

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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Impressum</span>
            <span className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"></span></h1>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">General Terms and Condition</h2>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300"></div>
              <h3>alvin
<br/><br/>
Spengergasse 
<br/>
1050 Wien
<br/>
Austria
<br/><br/>
Tel.: +43 660 6372849
<br/>
E-Mail: office@alvin.decoderate.com</h3>
          {/* Section header */}
          {/* <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Rechtliches</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Hier sind unsere Rechte</p>
                
          </div>       
          <div class="container">
                    <div class="box">
                        <div class="icon"><i class="far fa-handshake fa-2x" aria-hidden="true"></i></div>
                        <div class="content">
                        <h3>AGB</h3>
                            <p>AGB sind die wichtigsten Bestandteile eines Unternehmens</p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="icon"><i class="far fa-list-alt fa-2x"></i></div>
                        <div class="content">
                            <h3>Impressum</h3>
                            <p>Impressum sind die wichtigsten Bestandteile eines Unternehmens</p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="icon"><i class="fas fa-book fa-2x"></i></div>
                        <div class="content">
                            <h3>DSGVO</h3>
                            <p>Unternehmensrecht sind die wichtigsten Bestandteile eines Unternehmens</p>
                        </div>
                    </div>
                   
            </div>
        </div> */}
        </div>
        </div>
        </div>
        </div>
    </section>
  );
}

export default HeroImpressum;