import React, { Fragment } from 'react'
import MainBanner from '../Sections/MainBanner'
import Video from '../Sections/MainBanner/Video';
import ImgBanner from '../Sections/MainBanner/ImgBanner';
import BannerCaption from '../Sections/MainBanner/BannerCaption';
import Program from '../Sections/Program';
import CallToAction from '../Sections/CallToAction';
import FClassList from '../Sections/FClassList';

/**
* @author
* @function Homepage
**/

const Homepage = (props) => {
    const video = "gym-video.mp4";
    const poster = "training-image-04.jpg";
    return (
        <Fragment>
            <MainBanner>
                {video ? (
                    <div>
                        <Video video={video} />
                        <BannerCaption overlay="video-overlay" subHeading="work harder, get stronger" BHeading="easy with our gym" btnText="Become a member" />
                    </div>
                ) : (<ImgBanner poster={poster}>
                    <BannerCaption overlay="bg-overlay" subHeading="work harder, get stronger" BHeading="easy with our gym" btnText="Become a member" />
                </ImgBanner>)}
            </MainBanner>
            <Program />
            <CallToAction ctabgImg="cta-bg.jpg" />
            <FClassList />
        </Fragment>
    )

}

export default Homepage