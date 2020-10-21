import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

/**
* @author
* @function Footer
**/

const Footer = (props) => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col lg="12" sm="12">
                        <p>Copyright © 2020 Training Studio - Designed by <a href="https://github.com/saraswatiti" className="tm-text-link">Saraswati Timsina</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )

}

export default Footer