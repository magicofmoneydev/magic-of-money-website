import React from 'react'
import './Banner.css'
import img from '../../assets/img/vd3.MP4'

function Banner() {
  return (
    <section className='banner'>
        <div className='banner-text-wrap'>
            <h2>$MOM</h2>
            <h1>Magic Of Money!</h1>
            <p>
            While offering token projects a valid use case, we also offer investors a legitimate way to increase their passive income indefinitely.
            </p>
            <div className='social-links'>
              <a href="https://t.me/magicofmoney" className='buy-link' target="_blank" rel="noopener noreferrer">Join Community</a>
              <a href="https://pancakeswap.finance/swap" className='buy-link' target="_blank" rel="noopener noreferrer">BUY ON PANCAKESWAP</a>
            </div>
        </div>
         <div className='banner-image-wrap'>
            <video  autoPlay loop muted playsInline>
            <source src={img} type="video/mp4"/>
            </video>
        </div>
    </section>
  )
}

export default Banner;