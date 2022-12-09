import styled from "styled-components";
import { Swiper } from "swiper/react";
import { bgDark } from "../../variables/ColorVariables";

export const SwiperStyle = styled(Swiper)`
  ${bgDark};
  position: relative;
  z-index: 0;
  padding: 1rem;
  margin: 0.5rem 0;
  .img-carousel {
    height: 10rem;
    width: auto;
    margin-left: 2%;
    margin-right: 2%;
    display: inline-block;
  }
  @media (min-width: 768px) {
    .img-carousel {
      height: 30vh;
    }
  }
`;
