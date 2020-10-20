import React from 'react'
import { Col } from 'react-bootstrap'
import SocialLinks from '../../../Common/SocialLinks'

/**
* @author
* @function TrainerList
**/

const TrainerList = ({ TrainerImg, Tpost, TName, TView }) => {
    return (
        <Col md="4">
            <div className="trainer-item">
                <div className="image-thumb">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/${TrainerImg}`} alt="Trainer img" />
                </div>
                <div className="down-content">
                    <span>{Tpost}</span>
                    <h4>{TName}</h4>
                    <p>{TView}</p>
                    <SocialLinks />
                </div>
            </div>

        </Col>
    )

}

export default TrainerList