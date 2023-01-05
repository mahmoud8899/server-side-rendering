import React  from "react";


import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';






const SwiperPage = (props) => {
  const { children, ...all} = props






  return (
    <>
      <Swiper
        {...all}
      >
        {children}

      </Swiper>
    </>
  );
}



export default SwiperPage