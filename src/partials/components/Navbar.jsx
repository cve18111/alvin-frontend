import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import Logo from "../../images/logo_new.png"
import axios from 'axios';
function Navbar() {
  const navigate = useNavigate();

  document.cookie = 'validationcookie=success; expires = Thu, 01 Jan 1970 00:00:00 GMT'; 
  document.cookie = 'userId=success; expires = Thu, 01 Jan 1970 00:00:00 GMT'; 
  var cookies =  document.cookie;
  var afterSplit=cookies.split("=");
  var token=afterSplit[1];
  const AuthStr = 'Bearer '+token; 
  console.log(AuthStr);



  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  var userId = urlParams.get('id')
  
  var firstname;

  axios.get('http://localhost:3001/users/data/'+userId, { headers: { Authorization: AuthStr } })
  .then(function (response) {
    if(response.status===401)
      {
        navigate("/signin",{replace:true});
        return;
      }
    if(response.status===200)
      {
        firstname=response.data.firstname;  
    
    
  
        document.getElementById('gm').innerHTML = ' '+firstname;
         return;
      }
      if(response.status===304)
      {
        firstname=response.data.firstname;  
    
    
  
        document.getElementById('gm').innerHTML = ' '+firstname;
         return;
      }
   

   
  })
  .catch(function (error) {
    // handle error
    navigate("/signin",{replace:true});
    console.log(error);
  })
  .then(function () {
    // always executed
    
  });


  return (
    <NavbarContainer>
      <Text>
        Good morning,
      <span id="gm" ></span>
      </Text>
{/*      
      <InputContainer>
        <Icon>
     <img src={Logo}></img> 
        </Icon>
       
      </InputContainer> */}
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

const Text = styled.h1`
  span {
    font-weight: 500;
    color: #484258;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 1rem;
  }
`;
const InputContainer = styled.div`
  display: flex;
`;

const Icon = styled.div`
  height: 3rem;
  width: 10rem;
  background-color: #dce4ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  svg {
    color: #555555;
  }
`;
const Input = styled.input`
  border: none;
  background-color: #dce4ff;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  color: #464646;

  &:focus {
    border: none;
    outline: none;
  }
`;

export default Navbar;
