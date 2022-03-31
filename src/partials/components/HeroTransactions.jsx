import React from "react";
import styled from "styled-components";
import { IoStatsChart } from "react-icons/io5";
import { themeColor, hoverEffect } from "../utils";
import JoinSlack from "./JoinSlack";
import axios from 'axios';
import DOMPurify from 'dompurify'
import Papa from "papaparse";
import ReactDOM from 'react-dom';

import { darkThemeColor } from "../utils";





function loop(){
  

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  var userNummer = urlParams.get('id');
  var date;
  var reciepient;
  var amount;
  axios.get('https://api.alvin.credit/transactions/' + userNummer)
    .then(function (response) {
      if (response.status === 401) {
        console.log("401 err")
        // navigate("/signin",{replace:true});
        return;
      }
      if (response.status === 200) {

        for (var i = 0; i < response.data.entry.length; i++) {

          date =""+ response.data.entry[i].date;
          reciepient = ""+response.data.entry[i].reciepient;
          amount = ""+response.data.entry[i].amountEur;

          data.push({ datum: date.slice(0,10), empfaenger: reciepient, betrag: amount });

          adder = adder + "<tr><td>" + date + "</td><td>" + reciepient + "</td><td>" + amount + "</td></tr>";
         
     

        }

       


        

    


        // firstname=response.data.firstname;  
        //   lastname=response.data.lastname;

        return;
      }
      if (response.status === 304) {

        return;
      }


    })
    .catch(function (error) {
      // handle error
      //  console.log(error);
    })
    .then(function () {
      // always executed


    });






}

var data = [
  
]

loop();

console.log("DATA LÄNGE: "+data.length);
var adder="";
function HeroTransactions() {

  

  





  return (
    <JoinChannel>
      <CardContent flex={true}>
        <Slack>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Reciepient</th>
                <th>Amount (EUR)</th>
              </tr>


            </thead>

          <tbody  > 
          {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.datum}</td>
              <td>{val.empfaenger}</td>
              <td>{val.betrag}</td>
            </tr>
          )
        })}
          
          
          
          
          </tbody>





          </table>






        </Slack>
      </CardContent >
    </JoinChannel>

  );
}

const CardContent = styled.div`
  margin: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const Slack = styled.div`
  display: flex;
  color: white;x
`;
const JoinChannel = styled.div`
  background-color: ${darkThemeColor};
  height: 50%;
  margin-top: 6.5rem;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  transition: 0.4s ease-in-out;
  width: 60%;
 
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    height: max-content;
    width: 80%;
  }
`;

export default HeroTransactions;
