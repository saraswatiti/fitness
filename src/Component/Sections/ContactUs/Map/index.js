import React from 'react'

/**
* @author
* @function Map
**/

const Map = ({ iframe }) => {
    // const iframe1 = (iframe) => {
    //     return (
    //         __html: iframe
    //     )
    // }
    return (
        <div id="map">
            <div dangerouslySetInnerHTML={{ __html: iframe }}></div>
        </div >
    )

}

export default Map