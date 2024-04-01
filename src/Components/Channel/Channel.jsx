import React from "react";
import './Channel.css';

function Channel({image, channelName, firstTranslation, secondTranslation, thirdTranslation}){
    return (
        <div className="channel">
            <div className="channel__image_container">
                <img src={image} alt="" className="channel__images" />
            </div>
            <div className="channel__info_container">
                <h4 className="channel_name">{channelName}</h4>
                <p className="translation_1">{firstTranslation}</p>
                <p className="translation_2">{secondTranslation}</p>
                <p className="translation_3">{thirdTranslation}</p>
            </div>
        </div>
    )
}

export default Channel;