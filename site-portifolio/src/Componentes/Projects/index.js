import React from "react";
import { Button1, Button2, Button3, Card, Container, DivP, P, Raper, Title, Wraper } from "./styles";
import PJ1 from './img/project-img1.png';
import PJ2 from './img/project-img2.png';
import PJ3 from './img/project-img3.png'

const Projects = () => {
  return (
    <Container>
      <Title>Projetos</Title>
      <DivP>
        <P>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </P>
      </DivP>
      <Raper>
        <Button1>Teste</Button1>
        <Button2>Teste2</Button2>
        <Button3>Teste3</Button3>
      </Raper>
      <Wraper>
        <Card src={PJ1}/>
        <Card src={PJ2}/>
        <Card src={PJ3}/>
        <Card src={PJ1}/>
        <Card src={PJ2}/>
        <Card src={PJ3}/>
      </Wraper>
    </Container>
  );
};

export default Projects;
