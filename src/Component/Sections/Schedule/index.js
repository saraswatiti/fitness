import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from '../../Common/SectionTitle'

/**
* @author
* @function Schedule
**/

const Schedule = ({ Schedulebg }) => {

    return (
        <section className="section" id="schedule" style={{ backgroundImage: `url(${require(`../../../../public/assets/images/${Schedulebg}`)})` }}>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <SectionTitle darkbg="dark-bg" Stitle="CLASSES SCHEDULE" tIcon="line-dec.png"
                            Tdescription="Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu." />
                    </Col>
                </Row>
            </Container>
        </section >
    )

}

export default Schedule