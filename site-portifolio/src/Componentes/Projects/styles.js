import styled from 'styled-components';
import BG from './img/color-sharp2.png'


export const Container = styled.section`
width: 100%;
height: 130vh;
max-height: 1100px;
background-color: #000;
background-image: url(${BG});
background-position: right;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
align-items: center;
@media screen and (max-width: 1200px){
    height: 170vh;
    max-height: 170vh;
}
@media screen and (max-width: 800px){
    height: 300vh;
    max-height: 300vh;
}
@media screen and (max-width: 768px){
    height:310vh;
    max-height: 310vh;
}


`;

export const Title = styled.h1`
color: white;
font-size: xxX-large;
margin-top: 20px;
`;

export const DivP =  styled.div`
width:90%;
max-width: 800px;
height: auto;
margin-top: 20px;
display: flex;
text-align: center;
justify-content: center;

@media screen and (max-width: 768px){
    text-align: justify;
}

`;

export const P = styled.div`
color:white;
width: inherit;

`;

export const Raper = styled.div`
width: 95%;
max-width: 800px;
height: auto;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
z-index: 100;
`;

export const Button1 = styled.div`
width:33%;
height: 50px;
background-color: rgba(17, 18, 17);
display: flex;
justify-content: center;
align-items: center;
border: 1px solid white;
border-radius: 25px 0  0 25px;
cursor: pointer;
&:hover {
    background: linear-gradient(rgb(81, 99, 149, 0.5), rgba(97, 67, 133, 0.5));
  }
`;
export const Button2 = styled.div`
width:33%;
background-color: rgba(17, 18, 17);
height: 50px;
display: flex;
justify-content: center;
align-items: center;
border-top: 1px solid white;
border-bottom:  1px solid white;
cursor: pointer;
&:hover {
    background: linear-gradient(rgb(81, 99, 149, 0.5), rgba(97, 67, 133, 0.5));
  }
`;
export const Button3 = styled.div`
width:33%;
background-color: rgba(17, 18, 17);
height: 50px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid white;
border-radius: 0 25px 25px 0;
cursor: pointer;
&:hover {
    background: linear-gradient(rgb(81, 99, 149, 0.5), rgba(97, 67, 133, 0.5));
  }
`;


export const Wraper = styled.div`
width: 90%;
max-width: 1200px;
height: 500px;
display: flex;
flex-wrap: wrap;
margin-top: 30px;
justify-content: space-around;

`;

export const Card = styled.img`
width: 350px;
height: 300px;
background-color: azure;
border-radius: 25px;
margin: 10px auto;
@media screen and (max-width: 768px){
    width: 90%;
    
}
`; 