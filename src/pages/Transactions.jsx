import React from 'react';
import "../partials/App.css"
import styled from "styled-components";
import Sidebar from '../partials/components/Sidebar';
import HeroTransactions from '../partials/components/HeroTransactions';

function Transactions() {
    return (
        <Container>
          <Sidebar />
       <HeroTransactions />
     </Container>
  
     );
   }
   const Container = styled.div`
   display: flex;
   height: 97vh;
   background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
   border-radius: 2rem;
   @media screen and (min-width: 320px) and (max-width: 1080px) {
     flex-direction: column;
   }
 `;
 
    

  export default Transactions;
