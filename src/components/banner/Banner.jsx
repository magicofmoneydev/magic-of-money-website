import React from 'react'
import './Banner.css'
import img from '../../assets/img/money.png'

function Banner() {
  return (
    <section className='banner'>
        <div className='banner-text-wrap'>
            <h2>#MOM</h2>
            <h1>Magic Of Money!</h1>
            <p>
            While offering token projects a valid use case, we also offer investors a legitimate way to increase their passive income indefinitely.
            </p>
            <div className='social-links'>
              <a href="#home" className='buy-link'>Join Community</a>
              <a href="#home" className='buy-link'>BUY ON PANCAKESWAP</a>
            </div>
        </div>
         <div className='banner-image-wrap'>
            <img src={img} alt="magic of money" className='upDownanimation'  />
        </div>
    </section>
  )
}

export default Banner;