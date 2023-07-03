import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { useNavigate } from 'react-router-dom';

const TopTeamListMobile = () => {
  const navigate = useNavigate()
  const data = {
    teams:['golden_state','bucks','lakers'],
    imgs:{
      golden_state:'https://wallpapercave.com/wp/wp11415269.jpg',
      bucks:'https://wallpaperaccess.com/full/1743602.jpg',
      lakers:'https://images3.alphacoders.com/971/971322.jpg',
    }
  }
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.swiper-container2', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      centeredSlides: true,
    });
  }, []);

  const handleClick = (e) =>{
    navigate(`/player?query=${e.target.id}`)
  }

  return (
    <div className="tt_grid grid grid-cols-4 gap-20">
      <div className="swiper-container2">
        <div className="swiper-wrapper">
          {data.teams.map((team) => (
            <div key={team} onClick={(e)=>handleClick(e)}  className="swiper-slide">
              <img
                id={team} 
                className="w-full h-full object-cover rounded-xl"
                src={data.imgs[team]}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopTeamListMobile;
