import React from 'react'
import './Banner.css'
import img from '../../assets/img/money.png'

function Banner() {
  return (
    <section className='banner'>
        <div className='banner-text-wrap'>
            <h2>#MAGIC</h2>
            <h1>Buraya Slogan Gelecek !</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur laboriosam exercitationem reiciendis? Ducimus veritatis consequatur voluptatum corporis asperiores laborum nam explicabo odio esse, vel voluptate quidem ut molestias, culpa enim!
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