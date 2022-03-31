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


var doubles=[];



function loopy() {


  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  var userNummer = urlParams.get('id');
  var date;
  var reciepient;
  var amount;
  /*  axios.get('https://api.alvin.credit/transactions/' + userNummer)
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

          }

          return;
        }
        if (response.status === 304) {
  
          return;
        }
  
  
      })  ;
  */

//Alle doppelten Einträge finden (Abfrage kommt ohne Datum - ist ein GroupBy) - alle doppelten sind also potenzielle Fixkosten
      axios.get('https://api.alvin.credit/transactions/fixcost/'+userNummer)
      .then(function (request) {
        // handle success

        
        for (var i = 0; i < request.data.entry.length; i++) {

          console.log("PRINT i loop:"+i);

          doubles.push({ count: request.data.entry[i].count, empfaenger: request.data.entry[i]._id.Empfaenger, betrag: request.data.entry[i]._id.Betrag , isUsr: request.data.entry[i]._id.IsUsr});

        }
        
        console.log("Doubles Array:"+doubles[0].isUsr);
        
        console.log(request.data.entry[0]._id.Empfaenger);
        console.log("Doubles Array Länge: "+doubles.length);
        console.log("Doubles Array Array: "+doubles);


      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        

        loopywhoopy();
        // always executed
  /*      console.log("Doubles Array Länge: "+doubles.length);

        for (var i = 0; i < doubles.length; i++) {

          if(doubles[i].isUsr){


            console.log("Print i: "+ i);


            axios.get('https://api.alvin.credit/transactions/'+userNummer+'/'+doubles[i].empfaenger+'/'+doubles[i].betrag)
            .then(function (request) {

              console.log("Alle Transaktionen der Fixkoste Nummer "+i);

              console.log(request.data);

  
            })

          }

    
        }*/
return;
      });
  



}

async function loopywhoopy(){

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  var userNummer = urlParams.get('id');
  let transData=[];
  let promises=[];


  for (var i = 0; i < doubles.length; i++) {

    

    if(doubles[i].isUsr){


      console.log("Print i: "+ i);

      

      const loopresponse= await axios.get('https://api.alvin.credit/transactions/'+userNummer+'/'+doubles[i].empfaenger+'/'+doubles[i].betrag);
       

        transData.push(loopresponse);


    }


  }
  console.log("TRANSDATE");
//  console.log(transData[0].data.entry[0].amountEur); 
   console.log(transData);
console.log("DOUBLESDATA");
console.log(doubles);

var fixkosten_arr= [];
//Fixkosten berechnung

for(var i=0;i<transData.length;i++)
{

  var fixdatum=new Date(transData[i].data.entry[0].date.slice(0,10));


  var fixdatum2= new Date(transData[i].data.entry[1].date.slice(0,10));
  
  var lastindata= transData[i].data.entry.length-1;
  var fixdatum3= new Date(transData[i].data.entry[lastindata].date.slice(0,10));
  var heute= new Date(Date.now());
  var monat1=fixdatum.getMonth();
  var monat2=fixdatum2.getMonth();
  var monat3=fixdatum3.getMonth();
  var monatheute=heute.getMonth();
  
  if(fixdatum.getFullYear()==fixdatum2.getFullYear()|| fixdatum.getFullYear()==fixdatum2.getFullYear()-1 && heute.getFullYear()==fixdatum3.getFullYear() || heute.getFullYear()-1==fixdatum3.getFullYear() ){
    if(monat1==12&& monat2==1)
    {
      monat2=13;
    }
    
    if(monat1==monat2-1 && monat3==monatheute|| monat3==monatheute-1)
    {
      if(monat3==monatheute-1)
      {
        if(fixdatum3.getDate()>heute.getDate){
          console.log("LAUFENDE FIXKOSTEN ENTDECKT");

          heute.setDate(fixdatum.getDate());
         var nextbilling=heute;
          fixkosten_arr.push({ datum: nextbilling.toString().slice(0,15), empfaenger: transData[i].data.entry[0].reciepient, betrag: transData[i].data.entry[0].amountEur });

  
        }
  
  
      }
      else{
        console.log("LAUFENDE FIXKOSTEN ENTDECKT");
        heute.setDate(fixdatum.getDate());
        heute.setMonth(fixdatum3.getMonth()+1);
      var  nextbilling=heute;
       
        fixkosten_arr.push({ datum: nextbilling.toString().slice(0,15), empfaenger: transData[i].data.entry[0].reciepient, betrag: transData[i].data.entry[0].amountEur });

      }
    }
  
  }



}









data=fixkosten_arr;

}


var data = [

]

loopy();

function HeroBills() {

 








  return (
    <JoinChannel>
      <CardContent flex={true}>
        <Slack>
          <table>
            <thead>
              <tr>
                <th>Next Date</th>
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

export default HeroBills;
