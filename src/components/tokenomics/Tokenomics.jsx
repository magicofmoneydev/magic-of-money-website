import React from 'react';
import Feature from '../feature/Feature'
import Chart from '../chart/Chart'
import './Tokenomics.css'

//grafik üzerindeki veriler
const graph = [
    {label:'Marketing',value:20},
    {label:'Team',value:12},
    {label:'PancakeSwap Liquidity',value:68}               
]

const Tokenomics = () => {
    return(
        
       <section className="section tokenomic-main">
           <h1 className="sec-head">TOKENOMIC</h1>
            <div className="tokenomic linear-bg" id="tokenomic">
                <div className="content ">
                    <ul>
                        <li>
                            <Feature title="Total Supply" text="100.000.000" />
                        </li>
                        <li>
                            <Feature title="Burn" text="80,000,000" />
                        </li>
                        <li>
                            <Feature title="Circulating Supply" text="20,000,000" />
                        </li>
                        
                        <h2 className="trans-head"> <div></div> Buy Tax Fee</h2>
                        <li>
                            <Feature title="Rewards" text="5%" />
                        </li>
                        <li>
                            <Feature title="Liquidity" text="5%" />
                        </li>
                        <h2 className="trans-head"> <div></div> Sell Tax Fee</h2>
                        <li>
                            <Feature title="Rewards" text="5%" />
                        </li>
                        <li>
                            <Feature title="Liquidity" text="5%" />
                        </li>
                    </ul>
                </div>
                <div className="chart-area">
                    <Chart graph={graph}/>
                </div>
        </div>
       </section>
    )
}

export default Tokenomics;
