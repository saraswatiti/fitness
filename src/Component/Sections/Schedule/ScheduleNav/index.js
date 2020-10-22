import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class ScheduleNav
**/

class ScheduleNav extends Component {
    state = {}
    render() {
        return (
            <div className="filters">
                <ul className="schedule-filter">
                    {this.props.scheduleArrs.map(scheduleArr => {
                        const active = (scheduleArr === this.props.selected ? "active" : "");
                        return (
                            <li key={scheduleArr} className={active} onClick={() => this.props.setSelected(scheduleArr)}>
                                {scheduleArr}
                            </li>
                        )

                    })}
                </ul>
            </div>
        )
    }
}


ScheduleNav.propTypes = {}
export default ScheduleNav