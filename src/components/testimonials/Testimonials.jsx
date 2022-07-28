import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Tina snow',
    review: 'It was very easy to work with the seller, communicating with them was simple and quick. Gave them a description of what I needed and they delivered what I asked for in a timely manner.'
  },
  {
    avatar: AVTR2,
    name: 'shatta wale',
    review: 'amazing job. did a service perfectly no one else could do for me and achieved it. thank you so much. highly recommended. will use again.'
  },
  {
    avatar: AVTR3,
    name: 'kwame despoite',
    review: 'Thank you very much. The "in time"-delivery of high quality work is a must, if I cooperate with freelancers. So I was happy that Wasmeer delivered excellent work.'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Amazing value for a customized delivery and exceptional production. Highly recommended.'
  }

]



const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}       
       pagination={{ clickable: true }}>
       {
        data.map(({avatar, name, review}, index)  => {
          return (
            <SwiperSlide key={index} className='testimonial'>
            <div className='client__avatar'>
              <img src={avatar} alt="imgs"/>           
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small> 
          </SwiperSlide>    
          )
        })
       }
       
      </Swiper>
    </section>
  )
}

export default Testimonials