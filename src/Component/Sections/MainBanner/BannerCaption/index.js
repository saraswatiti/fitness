import React from 'react'

/**
* @author
* @function BannerCaption
**/

const BannerCaption = ({ subHeading, overlay, BHeading, btnText }) => {

    const getHeading = () => {
        var arrText = BHeading.split(' ');
        var lastword = arrText.pop();
        return arrText.join(" ") + (arrText.length > 0 ? " <em>" + lastword + "</em>" : lastword);
    }

    return (

        <div className={`header-text ${overlay}`}>
            <div className="caption">
                <h6>{subHeading}</h6>
                <h2 className="bnerheading" onLoad={getHeading(BHeading)} dangerouslySetInnerHTML={{ __html: getHeading() }} />
                <div className="main-button scroll-to-section">
                    <a href="#features">{btnText}</a>
                </div>
            </div>
        </div>
    )

}

export default BannerCaption