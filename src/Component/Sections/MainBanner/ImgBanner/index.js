import React from 'react'

/**
* @author
* @function ImgBanner
**/

const ImgBanner = ({ poster, children }) => {
    return (
        <div className="banner-img" style={{
            backgroundImage: `url(${require(`../../../../../public/assets/images/${poster}`)})`
        }}> {children}</div >
    )

}

export default ImgBanner