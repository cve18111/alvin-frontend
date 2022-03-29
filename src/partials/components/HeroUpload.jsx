import React from "react";
import styled from "styled-components";
import { IoStatsChart } from "react-icons/io5";
import { themeColor, hoverEffect } from "../utils";
import JoinSlack from "./JoinSlack";

import Papa from "papaparse";

import { darkThemeColor} from "../utils";

function HeroUpload() {

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        // Parsed Data Response in array format
        
        for(var i=0;i<results.data.length;i++){
          console.log(results.data[i]);

        }
      
      },
    });
  };
  
  


  return (
      <JoinChannel>
      <CardContent flex={true}>
      <Slack>
      <form  
        
       >
  
        <label for="myfile">Select a file:</label>
  
        <input  accept=".csv" type="file" id="csvFileInput" 
            name="csvFileInput" multiple="multiple" 
            onChange={changeHandler}/>
          
        <br /><br />
      
        <input type="submit" />
    </form>
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

export default HeroUpload;
