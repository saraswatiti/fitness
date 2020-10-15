import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from '../../Common/SectionTitle'
import FeatureItems from './FeatureItems'
import FeatureLists from './FeatureLists'

/**
* @author
* @function Program
**/

const Program = (props) => {
    return (
        <section className="section" id="features">
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <SectionTitle Stitle="CHOOSE PROGRAM" tIcon="line-dec.png"
                            Tdescription="Training Studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business website."
                        />
                    </Col>
                    <Col md={6}>
                        <FeatureItems>
                            <FeatureLists Ftitle="Basic Fitness" FIcon="features-first-icon.png"
                                Fcontent="Please do not re-distribute this template ZIP file on any template collection
                            website. This is not allowed."
                                FbtnText="Discover More"
                            />
                            <FeatureLists Ftitle="New Gym Training" FIcon="features-first-icon.png"
                                Fcontent="If you wish to support TemplateMo website via PayPal, please feel free to contact us.
                                    We appreciate it a lot."
                                FbtnText="Discover More"
                            />
                            <FeatureLists Ftitle="Basic Muscle Course" FIcon="features-first-icon.png"
                                Fcontent="Credit goes to Pexels website for images and video background used in this HTML template."
                                FbtnText="Discover More"
                            />
                        </FeatureItems>
                    </Col>
                    <Col md={6}>
                        <FeatureItems>

                            <FeatureLists Ftitle="Advanced Muscle Course" FIcon="features-first-icon.png"
                                Fcontent="You may want to browse through Digital Marketing or Corporate HTML CSS templates on our website."
                                FbtnText="Discover More"
                            />
                            <FeatureLists Ftitle="Yoga Training" FIcon="features-first-icon.png"
                                Fcontent="This template is built on Bootstrap v4.3.1 framework. It is easy to adapt the columns and sections."
                                FbtnText="Discover More"
                            />
                            <FeatureLists Ftitle="Basic Muscle Course" FIcon="features-first-icon.png"
                                Fcontent="Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor."
                                FbtnText="Discover More"
                            />
                        </FeatureItems>
                    </Col>
                </Row>
            </Container>
        </section >
    )

}

export default Program