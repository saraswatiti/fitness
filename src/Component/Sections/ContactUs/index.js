import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactForm from './ContactForm'
import Map from './Map'

/**
* @author
* @function ContactUs
**/

const ContactUs = (props) => {
    return (
        <section className="section" id="contact-us">
            <Container fluid>
                <Row>
                    <Col lg="6" xs="12">
                        <Map iframe='<iframe
                src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%" height="600px" frameborder="0" style="border:0" allowfullscreen></iframe>'/>
                    </Col>
                    <Col lg="6" xs="12">
                        <ContactForm contactbg="contact-bg.jpg" />
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default ContactUs