import React from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";

const TwitchEmbed = ({ embedId }) => (
    <div className="video-responsive">
        <iframe
        width="853"
        height="480"
        src={`https://www.`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded Twitch"
        controls="1"
        />
    </div>
);

TwitchEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default TwitchEmbed;