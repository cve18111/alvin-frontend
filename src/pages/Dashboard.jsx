import React from 'react';
import "../partials/App.css"
import styled from "styled-components";
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Sidebar from '../partials/components/Sidebar';
import MainContent from '../partials/components/MainContent';

function Dashboard() {
    return (
       <Container>
         <Sidebar />
      <MainContent />
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

  export default Dashboard;
