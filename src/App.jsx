import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import AOS from 'aos';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import Impressum from './pages/Impressum';
import AGB from './pages/AGB';
import DSGVO from './pages/DSGVO';
import Kontakt from './pages/Kontakt';
import FAQ from './pages/FAQ';
import UberUns from './pages/UberUns';
import Validate from './pages/Validate';
import Dashboard from './pages/Dashboard';
import Verify from './pages/Verify';
import Upload from './pages/Upload';
import Transactions from './pages/Transactions';
import Bills from './pages/Bills';




function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/agb" element={<AGB />} />
        <Route path="/dsgvo" element={<DSGVO />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/ueber-uns" element={<UberUns />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/validate" element={<Validate/>}/>
        <Route path="/verify" element={<Verify/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/Transactions" element={<Transactions/>}/>
        <Route path="/Bills" element={<Bills/>}/>

      </Routes>
    </>
  );

}

export default App;
