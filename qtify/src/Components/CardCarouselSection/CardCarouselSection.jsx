import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import Card from '../Card/Card';
import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation]);

const CardCarouselSection = ({ name, songsData }) => {
  return (
    <div className="swiper">
      <Swiper
        spaceBetween={10}
        navigation={{
          nextEl: `#${name}-right`,
          prevEl: `#${name}-left`,
        }}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {songsData.map((song) => (
          <SwiperSlide key={song.id}>
            <Card
              image={song.image}
              text={
                song.follows !== undefined
                  ? `${song.follows} Follows`
                  : `${song.likes} Likes`
              }
              title={song.title}
              tooltipText={song.songs?.length}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="left-btn slider-btn" id={`${name}-left`}>
        <img src="./leftBtn.png" alt="Left Button" />
      </button>
      <button className="right-btn slider-btn" id={`${name}-right`}>
        <img src="./rightBtn.png" alt="Right Button" />
      </button>
    </div>
  );
};

export default CardCarouselSection;
