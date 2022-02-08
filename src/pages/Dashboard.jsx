import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import HeroKontakt from '../partials/HeroKontakt';

function Dashboard() {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
  
        {/*  Site header */}
        <Header />
  
        {/*  Page content */}
        <main className="flex-grow">
  
          {/*  Page sections */}
          <HeroKontakt />
      
  
        </main>
  
        {/*  Site footer */}
        <Footer />
  
      </div>
    );
  }
  
  export default Dashboard;