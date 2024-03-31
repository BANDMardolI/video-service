import React from "react";
import './Novelties.css';
import Novelty from "../Novelty/Novelty";

function Novelties({dataArray}){
    return (
        <div className="novelties_container">
            {
                dataArray.map(element => {
                    return (
                        <Novelty 
                        image={element.image}
                        description={element.description}
                        path={element.path}
                        />
                    )
                })
            }
        </div>
    )
}

export default Novelties;