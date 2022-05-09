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
       <a href="https://twitter.com/magicofmoneyy?s=21&t=sF765HlqwyFHJGGi3K_iwQ" className='link' target='_blank' rel="noopener noreferrer">
           <img src={img3} alt="" />
       </a>
       <a href="https://t.me/magicofmoney" className='link'  target='_blank' rel="noopener noreferrer">
           <img src={img4} alt="" />
       </a>
   </section>
  )
}
export default Brand;