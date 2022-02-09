import React, { useState } from 'react';
import Faq from 'react-faq-component';
import Modal from '../utils/Modal';

import HeroImage from '../images/app.png';

function HeroFAQ() {

  const data = {
    rows: [
      {
        title: "Ist Alvin sicher?",
        content: "Ja! Alvin verwendet für die Kommunikation zwischen Ihrem Computer und unserer Website eine Verschlüsselung nach Industriestandard (256-bit SSL) oder höher. Dies ist die gleiche Stärke wie bei Geldautomaten (ATMs) und den besten Einzelhandelsgeschäften."
      },
      {
        title: "Wie funktioniert alvin eigentlich?",
        content: "Ganz einfach. Durch eine Upload funktion, kann man seine Kontoauszüge gemütlich mit alvin synchronisieren. Außerdem verschafft dir alvin den Überblick über deine Ausgaben."
      },
      {
        title: "Wieso ausgerechnet Alvin?",
        content: "Gerade junge Menschen verlieren durch die bequemen bargeldlosen Zahlungsmethoden oft den Überblick über ihre Finanzen. Die bestehenden Home Banking Systeme bieten oft nur eine Auflistung von Transaktionen an, die monatlichen Fixkosten können so nicht abgelesen werden. Dies führt oft zur Verschuldung am Ende des Monats, wenn abgeschlossene Abos fällig werden."
      },
      {
        title: "Wer sind unsere Projektpartner",
        content: "Decoderate e.U. (E-Mail: office@decoderate.com, https://decoderate.com) Südrandstraße 15, Ugur Avsar, +43 664 5432454"
      },
      {
        title: "Was ist unser Ziel?",
        content: "Mit der App soll auf einem Knopfdruck ersichtlich werden, ob der aktuelle Lebensstil mit den Einkommensverhältnissen gedeckt werden kann. Durch die Abeschätzung des Kontostandes zu Monatsende soll eine drohende Überziehung schnell erkannt werden"
      },
      {
        title: "Wie kann ich meine Kontoauszüge hochladen",
        content: "Der Benutzer erstellt einen Account oder verwendet einen vorhandenen Der Benutzer klickt auf das Feld „Kontoauszug hinzufügen“ Der Benutzer lädt die CSV-Datei seines Kontoauszuges in die App."
      },
      {
        title: "Wie aktiviere ich die Elternkontrolle ein",
        content: "Der Benutzer erteilt den Elternteile die Berechtigung auf Einsehen der jeweiligen Daten und Statistiken des Kindes"
      },
      ]
  }
  

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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">FAQ</span>
            <span className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"></span></h1>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Fragen und Antworten immer parat!</h2>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300"></div>
              <div class="faqitem">
                <Faq 
                  data={data} 
                  styles={{
                      bgColor: "white",
                      titleTextColor: "#48482a",
                      rowTitleColor: "#78789a",
                      rowTitleTextSize: 'large',
                      rowContentColor: "#48484a",
                      rowContentTextSize: '16px',
                      rowContentPaddingTop: '10px',
                      rowContentPaddingBottom: '10px',
                      rowContentPaddingLeft: '50px',
                      rowContentPaddingRight: '150px',
                      arrowColor: "black",
                      }
                    } 
                  />
              </div>
        </div>
        </div>
        
        </div>
        
        </div>

    </section>
  );
}

export default HeroFAQ;