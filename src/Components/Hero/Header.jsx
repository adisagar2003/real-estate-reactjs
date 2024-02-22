import React from 'react'
import Logo from '../../assets/images/logo.png';
import './Header.css';

function Header() {
  return (
    <section>
        <div className='h-wrapper'>
            <div className='wrapper'>
                <div className='h-container'>
                    <img src={Logo}  alt="logo" width={100} />
                    <div className='h-menu'>
                        <a href="">Residences</a>
                        <a href="">Our Value</a>
                        <a href="">Contact Us</a>
                        <a href="">Get Started</a>
                        <button className='button'>
                            <a href="">Contact</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Header