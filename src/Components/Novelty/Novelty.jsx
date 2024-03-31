import React from "react";
import './Novelty.css';
import {Link} from "react-router-dom";

function Novelty({image, description, path}){
    return (
        <Link to={path} className="novelty">
            <div className="novelty__image_container">
                <img src={image} alt="" className="novelty__images" />
            </div>
            <div className="novelty__info_container">
                <p className="novelty__info_description">{description}</p>
            </div>
        </Link>
    )
}

export default Novelty;