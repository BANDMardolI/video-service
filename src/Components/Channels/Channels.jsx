import React from "react";
import './Channels.css';
import Channel from "../Channel/Channel";

function Channels({dataArray}){
    return (
        <div className="channels_container">
            {
                dataArray.map(el => {
                    return (
                        <Channel
                        image={el.image}
                        channelName={el.channelName} 
                        firstTranslation={el.firstTranslation}
                        secondTranslation={el.secondTranslation}
                        thirdTranslation={el.thirdTranslation} 
                        />
                    )
                })
            }
        </div>
    )
}

export default Channels;