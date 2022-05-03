import React from 'react'
import './Roadmap.css'


function Roadmap() {
  return (
    <section className='roadmap'>
        <h1 className='sec-head'>Roadmap</h1>
        <main id='roadmap' className='phase'>
            <h2>Phase 1</h2>

            <p>Pancakeswap Listing</p>
            <p>Community Building</p>
            <p>Influcing</p>
            <p>500 Hold</p>
            <p>CoinmarketCap & CoinGecko Listing</p>
            <p>Pancakeswap Farm</p>
        </main>
        <main id='roadmap' className='phase'>
            <h2>Phase 2</h2>

            <p>Cex Listing</p>
            <p>Website Designs</p>
            <p>Stake</p>
            <p>Strategic Partnership</p>
        </main>
        <main id='roadmap' className='phase'>
            <h2>Phase 3</h2>

            <p>Gate.io Listing</p>
            <p>Mexc Listing</p>
            <p>Massive Marketing Campaign</p>
            <p>Bridge or ETH and SOL Networks</p>
        </main>


    </section>
  )
}
export default Roadmap;