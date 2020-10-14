import React from 'react'

/**
* @author
* @function MainBanner
**/

const MainBanner = (props) => {
    return (
        <div className="main-banner" id="top">
            {props.children}
        </div>
    )

}

export default MainBanner