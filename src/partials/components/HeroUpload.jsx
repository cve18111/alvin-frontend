import React from "react";
import styled from "styled-components";
import { IoStatsChart } from "react-icons/io5";
import { themeColor, hoverEffect } from "../utils";
import JoinSlack from "./JoinSlack";

import { darkThemeColor} from "../utils";

function HeroUpload() {
  return (
      <JoinChannel>
      <CardContent flex={true}>
      <Slack>
      <form action="/action_page.php" 
        enctype="multipart/form-data"
       >
  
        <label for="myfile">Select a file:</label>
  
        <input  accept=".csv" type="file" id="myfile" 
            name="myfile" multiple="multiple" />
          
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
