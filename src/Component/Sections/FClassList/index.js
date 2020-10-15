import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from '../../Common/SectionTitle'
import TabSection from './TabSection'

/**
* @author
* @function FClassList
**/

const FClassList = (props) => {
    return (
        <section className="section" id="our-classes">
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <SectionTitle Stitle="OUR CLASSES" tIcon="line-dec.png"
                            Tdescription="Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu."
                        />
                    </Col>
                    <TabSection />
                </Row>
            </Container>
        </section>
    )

}

export default FClassList