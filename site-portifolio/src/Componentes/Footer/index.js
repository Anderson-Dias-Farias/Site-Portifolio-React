import React from 'react';
import{Footers, Container, Logo, Icons, DivP, P } from './styles';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import IMG from './img/logo.svg';

const Footer = ()=> {
  return (
   <Footers>
    <Container>
        <Logo src={IMG} />
        <DivP>
            <P>Copyright 2022. All Rights Reserved</P>
        </DivP>
        <Icons>
            <FaGithub size={50}/>
            <FaInstagram size={50}/>
            <FaWhatsapp size={50}/>
        </Icons>
    </Container>
   </Footers>
  )
}

export default Footer;