import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from '../../Common/SectionTitle'
import TrainerList from './TrainerList'

/**
* @author
* @function Trainer
**/

const Trainer = (props) => {
    return (
        <section className="section" id="trainers">
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <SectionTitle Stitle="EXPERT TRAINERS" tIcon="line-dec.png"
                            Tdescription="Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu." />
                    </Col>
                </Row>
                <Row>
                    <TrainerList TrainerImg="first-trainer.jpg" Tpost="Strength Trainer"
                        TName="Bret D. Bowers"
                        TView="Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan
                        church-key pour-over seitan flannel."
                    />
                    <TrainerList TrainerImg="second-trainer.jpg" Tpost="Muscle Trainer"
                        TName="Hector T. Daigl"
                        TView="Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan
                    church-key pour-over seitan flannel."
                    />
                    <TrainerList TrainerImg="third-trainer.jpg" Tpost="Power Trainer"
                        TName="Paul D. Newman"
                        TView="Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan
                        church-key pour-over seitan flannel."
                    />
                </Row>
            </Container>
        </section>
    )

}

export default Trainer