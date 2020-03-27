import React from "react";
import Styled from "styled-components";
import SuccessImg from "../images/giphy.gif"



//styling

const AllContainer = Styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-content:center;
`


const SuperContainer = Styled.div`
display: flex;
`
const SuperHeader = Styled.h1`
color:black ;
width:100%;
font-family: 'Josefin', sans-serif;
`

const CompleteImg = Styled.img`
border: 1px solid black;
box-shadow: 10px 10px 8px #888888;
`

const Success = () => {
  return (
        
    <AllContainer>
      <SuperHeader>Yay!!! Success! Food is on its Way!!</SuperHeader>
      <SuperContainer>
      
      <CompleteImg src={SuccessImg} alt="pizza dog" />
    
  
    </SuperContainer>
    </AllContainer>
  );
};

export default Success;