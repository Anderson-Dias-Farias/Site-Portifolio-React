import styled from "styled-components";
import BG from './img/color-sharp2.png'

export const Container = styled.section`
width: 100%;
height: auto;
background-color: black;
background-image: url(${BG});
background-position: left;
background-size:contain;
background-repeat:no-repeat;
display: flex;
justify-content: center;
align-items: center;


@media screen and (max-width: 768px) {
   height:65vh;
  }

`;

export const Skilleds = styled.div`
display: flex;
flex-direction: column;
width: 95%;
max-width: 1400px;
height: auto;
background-color: rgba(17, 18, 17);
border-radius: 50px ;
margin-top: -35px;
border: 1px solid rgba(255,255,255, 0.8);
align-items: center;
margin-bottom: 10px;


`;
export const SH = styled.h1`
font-family: "Centra";
font-weight: bolder;
font-size: xxx-large;
margin-top:20px ;

`;

export const DivP = styled.div`
width: 90%;
height: auto;
display: flex;
align-items: center;
justify-content: center;

`;

export const Paragr = styled.p`
width: inherit;
height: auto;
font-family: "Centra";
text-align: justify;
color: #fff;
margin-top: 10px;
`;

export const Slides = styled.div`
width: 90%;
height: auto;
margin-top: 10px;
padding-bottom: 40px;


`;