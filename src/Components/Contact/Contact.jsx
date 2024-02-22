import React from 'react'
import "./Contact.css";
import ImageContainer from "../../assets/images/r1.png"
import { MdChatBubble, MdMessage, MdPerson, MdPhone } from 'react-icons/md';
function Contact() {
  return (
    <div className='white'>
        <div className='wrapper'>
            <div className='cont-row'>
                <div className='cont-left'>
                    <h3>Our Contact Us</h3>
                    <h2>Easy to contact us</h2>
                    <p>We always ready to help by providing the best services for you. We believe a good place to live can make your life better.</p>
                    <div className='cont-grid'>
                        <div className='cont-card'>
                            <div className='cont-card-contact'>
                                <div className='cont-card-icon'>
                                    <MdPhone /> 
                                </div>
                                <div className='cont-card-text'>
                                    <span>Call</span>
                                    <span>021 123 145 14</span>
                                </div>
                            </div>
                            <div className='cont-card-button button'>Video Call now</div>
                        </div>
                        <div className='cont-card'>
                            <div className='cont-card-contact'>
                                <div className='cont-card-icon'>
                                    <MdPerson /> 
                                </div>
                                <div className='cont-card-text'>
                                    <span>Meetup</span>
                                    <span>021 123 145 14</span>
                                </div>
                            </div>
                            <div className='cont-card-button button'>Video Call now</div>
                        </div>
                        <div className='cont-card'>
                            <div className='cont-card-contact'>
                                <div className='cont-card-icon'>
                                    <MdChatBubble /> 
                                </div>
                                <div className='cont-card-text'>
                                    <span>Video Call</span>
                                    <span>021 123 145 14</span>
                                </div>
                            </div>
                            <div className='cont-card-button button'>Video Call now</div>
                        </div>
                        <div className='cont-card'>
                            <div className='cont-card-contact'>
                                <div className='cont-card-icon'>
                                    <MdMessage /> 
                                </div>
                                <div className='cont-card-text'>
                                    <span>Message</span>
                                    <span>021 123 145 14</span>
                                </div>
                            </div>
                            <div className='cont-card-button button'>Video Call now</div>
                        </div>

                    </div>
                </div>
                <div className='cont-right'>
                    <img src={ImageContainer} className='image-container cont' />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact