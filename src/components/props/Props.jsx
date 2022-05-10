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
        MOM is a project focused on winning and earning.
        </p>
      </div>

      <div className='prop'>
        <div className='prop-image'>
          <img src={img1} alt="" />
        </div>
        <p className='prop-text'>
        Those who hold MOM will earn $MAGIC.
        </p>
      </div>

      <div className='prop'>
        <div className='prop-image'>
          <img src={img1} alt="" />
        </div>
        <p className='prop-text'>
        You will see our goals come one by one.
        </p>
      </div>
    </section>
  )
}
export default Props;