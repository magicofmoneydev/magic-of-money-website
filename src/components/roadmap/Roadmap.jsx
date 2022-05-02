import React from 'react'
import './Roadmap.css'
import Phase from '../phase/Phase'

const phaseRoad = {
    phase1:[
        'Community Creation',
        'Website Design and Development',
        'Infrastructure Works',
        'Pancakeswap Listing'
    ],
    phase2:[
        'Community Creation',
        'Website Design and Development',
        'Infrastructure Works',
        'Pancakeswap Listing'
    ],
    phase3:[
        'Community Creation',
        'Website Design and Development',
        'Infrastructure Works',
        'Pancakeswap Listing'
    ],
    phase4:[
        'Community Creation',
        'Website Design and Development',
        'Infrastructure Works',
        'Pancakeswap Listing'
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