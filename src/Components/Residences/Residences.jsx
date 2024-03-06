import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderData from "../../utils/slider.json";
import 'swiper/css';
import "./Residences.css";
import ResCard from './ResCard';

import { generateClient } from "aws-amplify/api";
import { listProperties } from "../../graphql/queries";
const client =  generateClient();

function Residences() {
    const [propertyData, setPropertyData] = React.useState([]);
    async function fetchProperties() {
        try {
            const propertyData = await client.graphql({
            query: listProperties
            });
            const properties = propertyData.data.listProperties.items;
            setPropertyData(properties);
        } catch (err) {
            console.log(err.message);
            console.log('error fetching todos');
        }
  }

  React.useEffect(()=> {
    fetchProperties();
   },[]);
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
            {propertyData.map((element)=>{

                return (<SwiperSlide>
                            <ResCard  heading={element.name} desc={element.description} image={element.image} price={element.price}/>
                        </SwiperSlide>)

            })}
            </Swiper>
        </div>  
    </div>
  )
}

export default Residences