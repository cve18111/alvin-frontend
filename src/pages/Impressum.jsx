import React from 'react';

import Header from '../partials/Header';
import HeroImpressum from '../partials/HeroImpressum';
import Footer from '../partials/Footer';

function Impressum() {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
  
        {/*  Site header */}
        <Header />
  
        {/*  Page content */}
        <main className="flex-grow">
  
          {/*  Page sections */}
          <HeroImpressum />
      
  
        </main>
  
        {/*  Site footer */}
        <Footer />
  
      </div>
    );
  }
  
  export default Impressum;