import React from 'react';

import Header from '../partials/Header';
import HeroAGB from '../partials/HeroAGB';
import Footer from '../partials/Footer';

function AGB() {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
  
        {/*  Site header */}
        <Header />
  
        {/*  Page content */}
        <main className="flex-grow">
  
          {/*  Page sections */}
          <HeroAGB />
      
  
        </main>
  
        {/*  Site footer */}
        <Footer />
  
      </div>
    );
  }
  
  export default AGB;