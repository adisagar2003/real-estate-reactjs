import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderData from "../../utils/slider.json";
import 'swiper/css';
import "./Residences.css";
import ResCard from './ResCard';
function Residences() {
  return (
    <div>

        <div className='wrapper '>
            <div className='r-title'>
                <h3>
                    Best Choices
                </h3>
                <h1>Popular Residencies</h1>
            </div>
            <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
            >
                {SliderData.map((element)=>{
                    return (<SwiperSlide>
                        <ResCard  heading={element.name} desc={element.detail} image={element.image} price={element.price}/>
                        </SwiperSlide>)
                })}
            </Swiper>
        </div>  
    </div>
  )
}

export default Residences