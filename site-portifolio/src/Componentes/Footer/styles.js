import styled from "styled-components";
import BG from './img/footer-bg.png'

export const Footers = styled.footer`
width: 100%;
height: 150px;
background-color: #000;
background-image: url(${BG});
background-size:cover;
justify-content: center;
align-items: center;
display: flex;
flex-wrap: wrap;
margin-top:20px ;
@media screen and (max-width: 768px) {
    height: 230px;
  }

`;

export const Container = styled.div`
  width: 100%;
  height: 150px;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
 
`;

export const Logo = styled.img`
  width: auto;
  height: auto;
  margin-left: 10px;
`;

export const Icons = styled.div`
  width: 250px;
  height: auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
 
`;

export const DivP = styled.div`
width: 300px;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
`;

export const P = styled.p`
color: white;
text-align: center;
width: inherit;
`;
