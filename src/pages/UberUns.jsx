import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import HeroUberUns from '../partials/HeroUberUns';
import HeroKontakt from '../partials/HeroKontakt';
import Team from '../partials/Team';

function UberUns() {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
  
        {/*  Site header */}
        <Header />
  
        {/*  Page content */}
        <main className="flex-grow">
  
          {/*  Page sections */}
          <HeroUberUns />
          <Team />
          <HeroKontakt />
          
      
  
        </main>
  
        {/*  Site footer */}
        <Footer />
  
      </div>
    );
  }
  
  export default UberUns;