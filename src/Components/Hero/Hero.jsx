import React from 'react';
import "./Hero.css";
import HeroImage from "../../assets/images/hero-image.png";
import {HiLocationMarker} from "react-icons/hi";
import CountUp from 'react-countup';

function Hero() {
  return (
    <section className='black'>
        <div className='wrapper'>
            <div className='h-content'>
                <div className='he-left'>
                    <div className="he-title">
                        <h1>
                            Discover<br />
                            Most Suitable<br />Property
                        </h1>
                        <div src='' className='orange-gradient' />
                    </div>
                    <div className="he-description">
                        <span>Find a variety of properties that suit you very easilty</span>
                        <span>Forget all difficulties in finding a residence for you</span>
                    </div>
                    <div className='search-bar'>
                        <HiLocationMarker color="var(--blue)" size={25} />
                        <input type="text" />
                        <button className='button'>Search</button>
                    </div>
                    <div className='stat-data'>
                        <span>
                            <CountUp start={8000} end={9875} duration={4} />
                            <span className='orange'>+</span>
                            <br></br>
                            <span>Premium Products</span>
                        </span>
                        <span>
                            <CountUp start={190} end={245} duration={4} />
                            <span className='orange'>+</span>
                            <br></br>
                            <span>Happy Customers</span>
                        </span>
                        <span>
                            <CountUp start={12} end={25} duration={4} />
                            <span className='orange'>+</span>
                            <br></br>
                            <span>Awards winning</span>
                        </span>
                    </div>
                </div>
                {/* right side */}
                <div className='he-right'>
                    <div className='he-image-container'>
                        <img src={HeroImage} className='image-container' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero