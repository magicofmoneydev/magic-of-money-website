import React from 'react'
import './Roadmap.css'
import Phase from '../phase/Phase'

const phaseRoad = {
    phase1:[
        'Community Creation',
        'Website Design and Development',
        'Infrastructure Works',
        'Pancakeswap Listing',
        
    ],
    phase2:[
        'Airdrop',
        '1000+ Investors',
        'NFT Market Creation',
        'Cg-cmc Reference',
        'Partnership Agreements'
    ],
    phase3:[
        '1500+ Investors',
        'First CEX Listing',
        'Advertising works',
        '500+ Investors',
        'Fair Launch'
    ],
    phase4:[
        'First DEX Exchange Listing',
        'Setting Up Your Own SWAP Exchange',
        'Determining the New Roadmap'
    ]
}

function Roadmap() {
  return (
    <section className='roadmap'>
         <h1 className="sec-head">ROADMAP</h1>
            <div className="roadmap-wrap" id="roadmap">
               <div className="phase linear-bg">
                <Phase number={1} roads={phaseRoad.phase1}/>
               </div>
               <div className="phase linear-bg">
                <Phase number={2} roads={phaseRoad.phase2}/>
               </div>
               <div className="phase linear-bg">
                <Phase number={3} roads={phaseRoad.phase3}/>
               </div>
               <div className="phase linear-bg">
                <Phase number={4} roads={phaseRoad.phase4}/>
               </div>
            </div>
    </section>
  )
}
export default Roadmap;