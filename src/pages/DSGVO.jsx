import React from 'react';

import Header from '../partials/Header';
import HeroDSGVO from '../partials/HeroDSGVO';
import Footer from '../partials/Footer';

function DSGVO() {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
  
        {/*  Site header */}
        <Header />
  
        {/*  Page content */}
        <main className="flex-grow">
  
          {/*  Page sections */}
          <HeroDSGVO />
      
  
        </main>
  
        {/*  Site footer */}
        <Footer />
  
      </div>
    );
  }
  
  export default DSGVO;