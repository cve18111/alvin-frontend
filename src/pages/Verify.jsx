import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import HeroVerify from '../partials/HeroVerify';

function Validate() {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
  
        {/*  Site header */}
        <Header />
  
        {/*  Page content */}
        <main className="flex-grow">
  
          {/*  Page sections */}
         
          <HeroVerify />
          
      
  
        </main>
  
        {/*  Site footer */}
        <Footer />
  
      </div>
    );
  }
  
  export default Validate;