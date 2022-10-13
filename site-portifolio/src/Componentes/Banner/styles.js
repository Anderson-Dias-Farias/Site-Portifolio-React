import styled from "styled-components";
import BG from "../Banner/img/banner-bg.png";

export const Container = styled.section`
  width: 100%;
  height: 110vh;
  background-image: url(${BG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  //position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    height:130vh ;
  }
`;

export const Section = styled.section`
  width: 100%;
  height: auto;
  max-width: 1400px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 130px;
    width: 100%;
    height: 80vh;
    align-items: center;
  }
`;

export const Divs = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    width: 95%;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
  }
`;
export const Dive = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: end;

  @media screen and (max-width: 768px) {
    width: 95%;
    margin-top: 10px;
    justify-content: center;
  }
`;

export const ImgAsrt = styled.img`
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 500px;
  animation: updown 5s linear infinite;

  @keyframes updown {

    0%{
      transform: translateY(-20px);
    }
    50%{
      transform: translateY(30px);
    }
    100%{
      transform: translateY(-20px);
    }
    
  }

  @media screen and (max-width: 768px) {
    width: 65%;
  }
`;

export const Button = styled.button`
  width: 300px;
  height: 60px;
  font-family: "Centra";
  font-size: large;
  font-weight: bold;
  color: white;
  background: linear-gradient(rgb(81, 99, 149, 0.8), rgba(97, 67, 133, 0.8));
  align-items: start;
  border: 1px solid white;
`;

export const Statico = styled.div`
  display: flex;
  width: auto;
  height: auto;
`;

export const Dinamico = styled.ul`
line-height:90px;
height: 45px;
overflow: hidden;
width:auto;
`;

export const Cursor = styled.div`

display:block;
overflow: hidden;

`;

export const LI = styled.div`

left: 0;
position: relative;
top:0;
transition: 2s;
animation: blinkcursor 500ms steps(55) infinite normal,  t 3s steps(55) normal infinite both, slide 9s steps(3) infinite;
white-space: nowrap;

&:after{
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
}

@keyframes t {
  0%{
    width:0px;
  }
  100%{
    width:200px;
  }
}
@keyframes blinkcursor {
  from{
    border-right: 2px solid white ;
  }
  to{
    border-right: transparent;
  }
}

@keyframes slide {
  100%{
    top:-120px;
  }
}
`;

export const H = styled.h1`
  font-size: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: start;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const H2 = styled.h2`
font-size: 30px;`;

export const SpamAnimate = styled.h1`
 font-size: 30px;
 margin-left: 15px;
 position: relative;
 text-align: left;
  `;

export const DivP = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: start;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
export const Parag = styled.p`
  width: inherit;
  height: auto;
  text-align: justify;
  font-family: "Centra";
`;

export const ButtonA = styled.button`
  cursor: pointer;
  width: 220px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: x-large;
  font-family: "Centra";
  font-weight: bolder;
  color: #fff;
  background: none;
  border: none;

  margin-top: 50px;

  &:hover {
    color: #ccc;
  }
`;
