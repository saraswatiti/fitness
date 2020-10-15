import React from 'react'
import { Link } from 'react-router-dom'

/**
* @author
* @function CtaContent
**/

const CtaContent = ({ ctaTitle, ctadiscrip, ctaBtnText }) => {
    const getCta = () => {
        var ctatext = ctaTitle.split(" ");
        var last = ctatext.pop();
        return (ctatext.length > 4 ? ctatext.join(" ") + " " + last : ctatext[0] + " <em>" + ctatext[1] + "</em>" + ctatext[2] + " <em>" + last + "</em>");
    }
    return (
        <div className="cta-content">
            <h2 onLoad={getCta(ctaTitle)} dangerouslySetInnerHTML={{ __html: getCta() }} />
            <p>{ctadiscrip}</p>
            <div className="main-button scroll-to-section">
                <Link to="#our-classes">{ctaBtnText}</Link>
            </div>
        </div>
    )

}

export default CtaContent