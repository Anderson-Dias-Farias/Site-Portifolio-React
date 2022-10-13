import React, { useEffect } from 'react';
import { Container, ContainerList } from './styles';
import {IoClose} from 'react-icons/io5'
import { Menu } from '../styles';

const MenuMobile = ({menuVisible, setMenuVisible}) => {

useEffect(()=>{
    document.body.style.overflowY = menuVisible ? 'hidden' : 'auto';
},[menuVisible])    

  return (
    <Container isVisible={menuVisible}>
        
       <ContainerList>
            <Menu>Home</Menu>
            <Menu>Skilss</Menu>
            <Menu>Projetos</Menu>
            <Menu>
            <IoClose size={45} color={'#ffffff'} onClick={()=> setMenuVisible(false)}/>
            </Menu>     
       </ContainerList>
       
      
    </Container>
  )
}

export default MenuMobile;