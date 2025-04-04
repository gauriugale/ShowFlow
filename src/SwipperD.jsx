import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

const SwiperDemo = () => {
  const slides = [
    { url: 'https://th.bing.com/th/id/OIP.B9Wbqe-0KlTRGN3oYD0MwQHaEK?rs=1&pid=ImgDetMain' , height:"800%", caption: 'Slide 1' },
    { url: 'https://th.bing.com/th/id/OIP.moNMwLh6KgelkQXCC9uSrQHaEK?rs=1&pid=ImgDetMain', caption: 'Slide 2' },
    { url: 'https://th.bing.com/th/id/OIP.rT9c5wqt9aiGbGjzTixb3QAAAA?rs=1&pid=ImgDetMain', caption: 'Slide 3' },
  ];

  return (
    <div className="swiper-conta
    
    iner">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="swiper-slide-content"
              style={{
                backgroundImage: `url(${slide.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
              }}
            >
              <span className="swiper-caption">{slide.caption}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperDemo;
