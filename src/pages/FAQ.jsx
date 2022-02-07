import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import HeroFAQ from '../partials/HeroFAQ';
import HeroKontakt from '../partials/HeroKontakt';

function FAQ() {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
  
        {/*  Site header */}
        <Header />
  
        {/*  Page content */}
        <main className="flex-grow">
  
          {/*  Page sections */}
          <HeroFAQ />
          <HeroKontakt />
      
  
        </main>
  
        {/*  Site footer */}
        <Footer />
  
      </div>
    );
  }
  
  export default FAQ;