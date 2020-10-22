import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import ScheduleNav from '../ScheduleNav'
import { Col } from 'react-bootstrap'
import ScheduleTable from '../ScheduleTable'

/**
* @author
* @class ScheduleCls
**/

class ScheduleCls extends Component {
    state = {
        selected: "Monday"
    }
    setSelected = (scheduleArr) => {
        this.setState({ selected: scheduleArr });
    }
    render() {
        return (
            <Fragment>
                <Col md="12">
                    <ScheduleNav scheduleArrs={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]} selected={this.state.selected} setSelected={this.setSelected} />
                </Col>
                <Col md={{ span: 10, offset: 1 }}>
                    <ScheduleTable week="Monday" isSelected={this.state.selected === 'Monday'} />
                    <ScheduleTable week="Tuesday" isSelected={this.state.selected === 'Tuesday'} />
                    <ScheduleTable week="Wednesday" isSelected={this.state.selected === 'Wednesday'} />
                    <ScheduleTable week="Thursday" isSelected={this.state.selected === 'Thursday'} />
                    <ScheduleTable week="Friday" isSelected={this.state.selected === 'Friday'} />
                </Col>
            </Fragment >
        )
    }
}


ScheduleCls.propTypes = {}
export default ScheduleCls