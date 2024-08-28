import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// Swiperのモジュールを個別にインポート
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const MySwiperComponent = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]} 
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper: SwiperType) => console.log(swiper)} // Swiper型を指定
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="image1.jpg" alt="Slide 1" /></SwiperSlide>
      <SwiperSlide><img src="image2.jpg" alt="Slide 2" /></SwiperSlide>
      <SwiperSlide><img src="image3.jpg" alt="Slide 3" /></SwiperSlide>
      <SwiperSlide><img src="image4.jpg" alt="Slide 4" /></SwiperSlide>
    </Swiper>
  );
};

export default MySwiperComponent;