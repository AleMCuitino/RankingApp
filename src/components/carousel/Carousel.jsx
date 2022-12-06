import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//components from this project
import Card from "../card/Card";

function Carousel() {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src="https://play-lh.googleusercontent.com/MFzdOGGdFVrV5T5kWB7mXRytsx4Y1l6A8fTdp_OemGBXQG8jib55E5WnzWaMYRTwdg" />
          
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://play-lh.googleusercontent.com/su5uZ0LEFvf0SoqvFCHXzUfY70fjbtQ47z3JMzQCOr9uEhVRJDlMwVH8tQkZNG0ZU9Q" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://play-lh.googleusercontent.com/E3ficCojbkyz8xIfKMfw_EqQXi8ifQ3A6_EMgdG-Kwe0bw5-TYN5DTyaK6iYRVjTWGOU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://play-lh.googleusercontent.com/su5uZ0LEFvf0SoqvFCHXzUfY70fjbtQ47z3JMzQCOr9uEhVRJDlMwVH8tQkZNG0ZU9Q" />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}

export default Carousel;
