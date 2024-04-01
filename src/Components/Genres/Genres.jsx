import React from "react";
import './Genres.css';
import Genre from "../Genre/Genre";

function Genres({dataArray}){
    return (
        <div className="genre_container">
            {
                dataArray.map(element => {
                    return (
                        <Genre 
                        icon={element.icon}
                        title={element.title}
                        path={element.path}
                        itemClass={element.itemClass}
                        />
                    )
                })
            }
        </div>
    )
}

export default Genres;