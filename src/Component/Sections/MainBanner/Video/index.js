import React from 'react'

/**
* @author
* @function Video
**/

const Video = ({ video }) => {
    console.log(video);
    return (
        <video loop autoPlay id="bg-video">
            <source src={require(`../../../../../public/assets/images/${video}`)} type='video/mp4' />
            <source src={require(`../../../../../public/assets/images/${video}`)} type="video/ogg" />
        </video>
    )

}

export default Video;