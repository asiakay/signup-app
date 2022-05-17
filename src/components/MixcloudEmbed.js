import React from 'react';
import ReactPlayer from 'react-player';

function MixcloudEmbed(){
    return (
        <div id="listen">
        <div className="mixcloud-responsive">

        <ReactPlayer
            url="https://www.mixcloud.com/asialakay/all-bass-everything-live-mix/"
            controls="false"
            
            />
    </div>
    </div>
    )
}

export default MixcloudEmbed;