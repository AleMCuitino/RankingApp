import React from 'react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SwiperStyle,} from './CarouselStyle';


function carousel() {
  return (
    <>
      <SwiperStyle
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

      <SwiperSlide><img class="img-carousel" src='https://play-lh.googleusercontent.com/MFzdOGGdFVrV5T5kWB7mXRytsx4Y1l6A8fTdp_OemGBXQG8jib55E5WnzWaMYRTwdg'/></SwiperSlide>
      <SwiperSlide><img class="img-carousel" src='https://play-lh.googleusercontent.com/VGS00uSW8Mp96Syfhgd3JMMPsvytbkPN_bQeC7342TSnOmT431fpKD48n3QikB3mk79c'/></SwiperSlide>
      <SwiperSlide><img class="img-carousel" src='https://play-lh.googleusercontent.com/Gk6Mmh4HcsCiCm6uUoXcL5ImC9bIJDkyf7yKJJ7A0T_IOGLgmNPg-pIRhq3kTtpoxoPw'/></SwiperSlide>
   
    </SwiperStyle>
    </>
  )
}

export default carousel
