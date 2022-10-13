import React from 'react';
import CircularDeterminate from './ArrayCarosel';
import { Container } from './styles';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';


const Carrossel = () => {
   const Skils = [
    {'id': 1,'name': 'HTML','value': 98},
    {'id': 2,'name': 'CSS','value': 95},
    {'id': 3,'name': 'JAVASCRIPT','value': 95},
    {'id': 4,'name': 'REACT','value': 80},
    {'id': 5,'name': 'REACT-NATIVE','value': 70},
    {'id': 6,'name': 'NODE.JS','value': 50},
    {'id': 7,'name': 'MYSQL','value': 30},
    {'id': 8,'name': 'NEXT.JS','value': 35},
   ]

   const Itens = Skils.map((Skils)=>{
    return(
     <SwiperSlide key={Skils.id}>
      <CircularDeterminate name={Skils.name} value={Skils.value}/>
     </SwiperSlide>
    )
   });
 
 
    return (
    <Container>   
      <Swiper 
      modules={[Navigation, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      navigation={true}
      loop={true}
      pagination={{ clickable: true }}
      >
        {Itens}
      </Swiper>
    </Container>
  )
}

export default Carrossel;