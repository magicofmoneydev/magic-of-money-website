import React from "react";
import './Phase.css'

const Phase = ({number,roads}) => {
    return(
        <div className="phase-main">
            <h2 className="phase-head">Phase {number}</h2>
                <ul>
                    {roads.map(road => {
                        return <li>-&nbsp;&nbsp;{road}</li>
                    })}
            </ul>
        </div>
    )
}

export default Phase;