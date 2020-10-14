import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from '../../Common/SectionTitle'

/**
* @author
* @function Program
**/

const Program = (props) => {
    return (
        <section className="section" id="features">
            <Container>
                <Row>
                    <Col md={12}>
                        <SectionTitle Stitle="CHOOSE PROGRAM" tIcon="line-dec.png"
                            Tdescription="Training Studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business website."
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default Program