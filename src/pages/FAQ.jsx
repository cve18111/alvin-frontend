import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import HeroFAQ from '../partials/HeroFAQ';

function FAQ() {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
  
        {/*  Site header */}
        <Header />
  
        {/*  Page content */}
        <main className="flex-grow">
  
          {/*  Page sections */}
          <HeroFAQ />
      
  
        </main>
  
        {/*  Site footer */}
        <Footer />
  
      </div>
    );
  }
  
  export default FAQ;