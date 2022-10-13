import React from "react";
import {
  Button,
  ButtonA,
  Container,
  Divs,
  H,
  H2,
  ImgAsrt,
  Parag,
  Section,
  Dive,
  DivP,
  Statico,
  SpamAnimate,
  Dinamico,
  LI,
  Cursor,
} from "./styles";
import Astr from "./img/header-img.svg";
import { FaArrowCircleRight } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <Container>
        <Section>
          <Divs>
            <Button>Bem vindo ao meu Portifolio</Button>
            <H>Ola! Meu nome é Anderson</H>
            
            <Statico>
              <H2>Eu sou DEV, </H2>
              <Dinamico>                
                <Cursor>
                  <LI><SpamAnimate>FRONT/END</SpamAnimate></LI>
                  <LI><SpamAnimate>REACT/NTV</SpamAnimate></LI>
                  <LI><SpamAnimate>J.SCRIPT</SpamAnimate></LI>
                  <LI><SpamAnimate>HTML/CSS</SpamAnimate></LI>
                </Cursor>
              </Dinamico>
            </Statico>
            <DivP>
              <Parag>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Parag>
            </DivP>
            <ButtonA>
              <Parag>Vamos conectar</Parag>
              <FaArrowCircleRight size={25} />
            </ButtonA>
          </Divs>
          <Dive>
            <ImgAsrt src={Astr} />
          </Dive>
        </Section>
      </Container>
    </>
  );
};

export default Banner;


/*  <LI><SpamAnimate>NATIVE</SpamAnimate></LI>
              <LI><SpamAnimate>JAVA</SpamAnimate></LI>
              <LI><SpamAnimate>FRONT</SpamAnimate></LI>
              <LI><SpamAnimate>END</SpamAnimate></LI>*/