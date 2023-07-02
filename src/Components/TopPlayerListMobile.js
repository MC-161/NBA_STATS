import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const TopPlayerListMobile = () => {
  const data = {
    players: ['jokivic', 'james', 'giannis', 'steph'],
    imgs: {
      jokivic:
        'https://w0.peakpx.com/wallpaper/928/325/HD-wallpaper-nikola-jokic-mvp-2021.jpg',
      james:
        'https://w0.peakpx.com/wallpaper/445/368/HD-wallpaper-lebron-james-los-angeles-lakers-forward-portrait-creative-art-american-basketball-player-nba-basketball-usa-national-basketball-association.jpg',
      giannis: 'https://wallpaperaccess.com/full/1291368.jpg',
      steph: 'https://images7.alphacoders.com/982/982253.jpg',
    },
  };

  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.swiper-container1', {
      slidesPerView: '2',
      spaceBetween: 10,
      centeredSlides: true,
      initialSlide:1,
    });
  }, []);

  return (
    <div className="tp_grid grid grid-cols-4 gap-20">
      <div className="swiper-container1">
        <div className="swiper-wrapper">
          {data.players.map((player) => (
            <div key={player} className="swiper-slide">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={data.imgs[player]}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPlayerListMobile;
