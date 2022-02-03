import React, { useState } from 'react';
import Modal from '../utils/Modal';

import HeroImage from '../images/app.png';
import TestimonialImage from '../images/jovic.jpeg';
import TestimonialImage2 from '../images/toni.jpeg';
import TestimonialImage3 from '../images/srki.jpeg';
import TestimonialImage4 from '../images/marko.jpeg';

function Team() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">
       <a name="team"> </a>
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Das Team</span>
            <span className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"></span></h1>
            <div className="max-w-3xl mx-auto">
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300"></div>  
            </div> 
            </div>
              {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-blue-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <img className="relative rounded-full" src={TestimonialImage} width="96" height="96" alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “Erfolgreiche Menschen tun das, was erfolglose Menschen nicht zu tun bereit sind. Wünscht euch nicht, dass es einfacher wäre, sondern dass ihr besser wärt.“
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">David Jovic</cite>
                <div className="text-gray-600">
                  <span>Projektleiter</span> <a className="text-blue-600 hover:underline" href="https://www.instagram.com/dxvid.jov/">@Instagram</a>
                </div>
              </div>
              
              

                

            </div>
          </div>
        {/* Testimonials */}
        <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-blue-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <img className="relative rounded-full" src={TestimonialImage4} width="96" height="96" alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “Es gibt zwei Arten von Menschen, die Ihnen sagen werden, dass Sie in dieser Welt nichts bewirken können: diejenigen, die Angst haben, es zu versuchen, und diejenigen, die Angst haben, dass Sie Erfolg haben werden.“
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Marko Cvejic</cite>
                <div className="text-gray-600">
                  <span>Programmierer & Designer</span> <a className="text-blue-600 hover:underline" href="https://www.instagram.com/antonio_beslic/">@Instagram</a>
                </div>
              </div>
            </div>
          </div>
          
                  {/* Testimonials */}
                  <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-blue-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <img className="relative rounded-full" src={TestimonialImage2} width="96" height="96" alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “Es ist besser, in der Originalität zu scheitern als in der Nachahmung erfolgreich zu sein.“
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Antonio Beslic</cite>
                <div className="text-gray-600">
                  <span>Programmierer & Designer</span> <a className="text-blue-600 hover:underline" href="https://www.instagram.com/antonio_beslic/">@Instagram</a>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-blue-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <img className="relative rounded-full" src={TestimonialImage3} width="96" height="96" alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “Erfolg ist nicht endgültig, Misserfolg nicht fatal: Was zählt, ist der Mut zum Weitermachen.“
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Srdjan Jankovic</cite>
                <div className="text-gray-600">
                  <span>Programmierer & Datenbank</span> <a className="text-blue-600 hover:underline" href="https://www.instagram.com/srkibtc/">@Instagram</a>
                </div>
              </div>
            </div>
          </div>


        
    
                    
                    

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
         {/* Testimonials */}

    </section>
  );
}

export default Team;