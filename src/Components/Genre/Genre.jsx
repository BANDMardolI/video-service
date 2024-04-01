import React from "react";
import './Genre.css';
import {Link} from "react-router-dom";

function Genre({icon, title, path, itemClass}){
    return (
        <Link to={path} className="genre">
            <div className={"genre__bg_container" + itemClass}>
                <div className="genre__icon_container">
                    <img src={icon} alt="" className="genre__icon" />
                </div>
                <h3 className="genre__title">{title}</h3>
            </div>
        </Link>
    )
}

export default Genre;
