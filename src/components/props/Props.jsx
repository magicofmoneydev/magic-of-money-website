import React from 'react'
import './Props.css'
import img1 from '../../assets/img/bag.png'

 function Props() {
  return (
    <section className='props section'>
      <div className='prop'>
        <div className='prop-image'>
          <img src={img1} alt="" />
        </div>
        <p className='prop-text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error dolores ad natus excepturi voluptatem.
        </p>
      </div>

      <div className='prop'>
        <div className='prop-image'>
          <img src={img1} alt="" />
        </div>
        <p className='prop-text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error dolores ad natus excepturi voluptatem.
        </p>
      </div>

      <div className='prop'>
        <div className='prop-image'>
          <img src={img1} alt="" />
        </div>
        <p className='prop-text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error dolores ad natus excepturi voluptatem.
        </p>
      </div>
    </section>
  )
}
export default Props;