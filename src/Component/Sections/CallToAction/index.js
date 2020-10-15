import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CtaContent from './CtaContent'

/**
* @author
* @function CallToAction
**/

const CallToAction = ({ ctabgImg }) => {
    return (
        <section className="section" id="call-to-action" style={{ backgroundImage: `url(${require(`../../../../public/assets/images/${ctabgImg}`)})` }}>
            <Container>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <CtaContent ctaTitle="DON’T THINK, BEGIN TODAY!"
                            ctadiscrip="Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula, sit amet dapibus
                        odio augue eget libero. Morbi tempus mauris a nisi luctus imperdiet."
                            ctaBtnText="Become a member"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default CallToAction