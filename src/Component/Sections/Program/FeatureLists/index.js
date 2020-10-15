import React from 'react'
import { Link } from 'react-router-dom'

/**
* @author
* @function FeatureLists
**/

const FeatureLists = ({ Ftitle, FIcon, Fcontent, FbtnText }) => {
    return (
        <li className="feature-item">
            <div className="left-icon">
                <img src={require(`../../../../../public/assets/images/${FIcon}`)} alt="feature-img" />
            </div>
            <div className="right-content">
                <h4>{Ftitle}</h4>
                <p>{Fcontent}</p>
                <Link to="/" className="text-button">{FbtnText}</Link>
            </div>
        </li>
    )

}

export default FeatureLists