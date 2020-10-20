import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance } from "react-icons/fa";

/**
* @author
* @function SocialLinks
**/

const SocialLinks = (props) => {
    return (
        <ul className="social-icons">
            <li>
                <Link to="/">
                    <FaFacebookF />
                </Link>
            </li>
            <li>
                <Link to="/">
                    <FaTwitter />
                </Link>
            </li>
            <li>
                <Link to="/">
                    <FaLinkedinIn />
                </Link>
            </li>
            <li>
                <Link to="/">
                    <FaBehance />
                </Link>
            </li>
        </ul>
    )

}

export default SocialLinks