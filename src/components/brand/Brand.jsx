import React from 'react'
import './Brand.css'
import img1 from '../../assets/img/coinmarketcap.png'
import img2 from '../../assets/img/coingecko.png'
import img3 from '../../assets/img/twitter.png'
import img4 from '../../assets/img/telegram.png'

function Brand() {
  return (
   <section className='row brand'>
       <a href="#home" className='link'>
           <img src={img1} alt="" />
       </a>
       <a href="#home" className='link'>
           <img src={img2} alt="" />
       </a>
       <a href="#home" className='link'>
           <img src={img3} alt="" />
       </a>
       <a href="#home" className='link'>
           <img src={img4} alt="" />
       </a>
   </section>
  )
}
export default Brand;