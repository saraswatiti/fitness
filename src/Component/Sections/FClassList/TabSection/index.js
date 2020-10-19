import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import TabNav from './TabNav'
import PropTypes from 'prop-types'
import Tab from './Tab'

/**
* @author
* @class TabSection
**/

class TabSection extends Component {
    state = {
        selected: 'First Training Class'
    }

    setSelected = (tab) => {
        this.setState({ selected: tab });
    }

    render() {
        return (
            <Row id="tabs">
                <Col md={4}>
                    <TabNav tabs={["First Training Class", "Second Training Class", "Third Training Class", "Fourth Training Class"]}
                        selected={this.state.selected} setSelected={this.setSelected}
                    />
                </Col>
                <Col md={8}>
                    <section className='tabs-content'>
                        <Tab isSelected={this.state.selected === 'First Training Class'}>
                            <article id='tabs-1'>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/training-image-01.jpg`} alt="First Class" />
                                <h4>First Training Class</h4>
                                <p>Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend
                                hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem
                                tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut,
                                accumsan diam.</p>
                                <div className="main-button">
                                    <a href="#">View Schedule</a>
                                </div>
                            </article>
                        </Tab>
                        <Tab isSelected={this.state.selected === 'Second Training Class'}>
                            <article id='tabs-1'>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/training-image-02.jpg`} alt="Second Training" />
                                <h4>Second Training Class</h4>
                                <p>Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a
                                velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus
                                nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius
                                natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                <div className="main-button">
                                    <a href="#">View Schedule</a>
                                </div>
                            </article>
                        </Tab>
                    </section>

                </Col>
            </Row>
        )
    }
}


TabSection.propTypes = {}
export default TabSection
