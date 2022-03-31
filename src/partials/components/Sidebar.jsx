import React from "react";
import { useNavigate} from 'react-router-dom';
import styled from "styled-components";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import {MdArticle} from "react-icons/md"
import { AiOutlinePieChart } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import Badge from "./Badge";
import AvatarImage from "../../images/user_empty.png";
import { darkThemeColor } from "../utils";
import IconAlvin from '../../images/favicon.png';
import axios from 'axios';

function Sidebar() {
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
  var lastname;
  var firstname;
  var name;

  axios.get('https://api.alvin.credit/users/data/'+userId, { headers: { Authorization: AuthStr } })
  .then(function (response) {
    if(response.status===401)
      {
        navigate("/signin",{replace:true});
        return;
      }
      if(response.status===200)
      {
        firstname=response.data.firstname;  
        lastname=response.data.lastname;
    
         name= firstname+' '+lastname;

         document.getElementById('name').innerHTML = name;
         return;
      }
      if(response.status===304)
      {
        firstname=response.data.firstname;  
        lastname=response.data.lastname;
    
         name= firstname+' '+lastname;

         document.getElementById('name').innerHTML = name;
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

  function logout(){
    navigate("/",{replace:true});
  }
  function upload(){
    navigate("/upload?id="+userId,{replace:true});
  }
  function bills(){
    navigate("/bills?id="+userId,{replace:true});
  }
  function dashb(){
    navigate("/Dashboard?id="+userId,{replace:true});
  }
  function trans(){
    navigate("/Transactions?id="+userId,{replace:true});
  }
  function bills(){
    navigate("/Bills?id="+userId,{replace:true});
  }


  return (
    <Container>
    <ProfileContainer>
    {/* <br/>
     <IconAlv>
     
      <img src={IconAlvin} width="100px"></img>
    </IconAlv> */}
      <Avatar src={AvatarImage} />

      <Name id="name"> Loading ... </Name>
    </ProfileContainer>
    <LinksContainer>
      <Links>
        <Link onClick={() => logout()}>
          <RiHomeLine />
          <h3>Home</h3>
        </Link>
        <Link onClick={() => dashb()}>
          <RiFileCopyLine />
          <h3>Dashboard</h3>
        </Link>
        <Link onClick={() => bills()}>
          <FaWallet />
          <h3>Bills</h3>
        </Link>
        <Link onClick={() => trans()}>
          < MdArticle/>
          <h3>Uploaded Transactions</h3>
        </Link>
        <Link onClick={() => upload()}>
          <AiOutlinePieChart />
          <h3>Upload</h3>
        </Link>
        <Link onClick={() => logout()}>
          <BiLogOut/>
          <h3>Logout</h3>
        </Link>
      </Links>
    </LinksContainer>
  </Container>
  );
}

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const IconAlv = styled.div`

background-color: white;

`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;

const Link = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;

const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;