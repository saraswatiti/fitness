import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

/**
* @author
* @function ContactForm
**/

const ContactForm = ({ contactbg }) => {
    return (
        <div className="contact-form" style={{ backgroundImage: `url(${require(`../../../../../public/assets/images/${contactbg}`)})` }}>
            <Form id="contact" action="" method="post">
                <Row>
                    <Col md="6" sm="12">
                        <fieldset>
                            <input name="name" type="text" id="name" placeholder="Your Name*" required="" />
                        </fieldset>
                    </Col>
                    <Col md="6" sm="12">
                        <fieldset>
                            <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*"
                                placeholder="Your Email*" required="" />
                        </fieldset>
                    </Col>
                    <Col md="12">
                        <fieldset>
                            <input name="subject" type="text" id="subject" placeholder="Subject" />
                        </fieldset>
                    </Col>
                    <Col md="12">
                        <fieldset>
                            <textarea name="message" rows="6" id="message" placeholder="Message"
                                required=""></textarea>
                        </fieldset>
                    </Col>
                    <Col md="12">
                        <fieldset>
                            <button type="submit" id="form-submit" className="main-button">Send Message</button>
                        </fieldset>
                    </Col>
                </Row>
            </Form>
        </div>
    )

}

export default ContactForm