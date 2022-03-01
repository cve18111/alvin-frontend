import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import HeroValidate from '../partials/HeroValidate';

function Validate() {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
  
        
        {/*  Page content */}
        <main className="flex-grow">
  
          {/*  Page sections */}
         
          <HeroValidate />
          
      
  
        </main>
  
      </div>
    );
  }
  
  export default Validate;