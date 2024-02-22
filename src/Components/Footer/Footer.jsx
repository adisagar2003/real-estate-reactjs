import React from 'react'
import Logo2 from "../../assets/images/logo2.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="white">
        <div className='wrapper footer'>
            <div className='f-row'>
                    <div className='f-image'>
                       <img src={Logo2} width={100} /> 
                       <span>Our vision is to make all people
                        the best place to live for them</span>
                    </div>
             
                <div className='f-information'>
                    <div>
                        Information
                    </div>
                    <div>
                        29 Guy St, AB, USA
                    </div>
                    <div>
                        <a href="">Property</a>
                        <a href="">Services</a>
                        <a href="">Product</a>
                        <a href="">About Us</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer