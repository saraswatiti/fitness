import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class ScheduleTable
**/

class ScheduleTable extends Component {

    render() {
        if (this.props.isSelected) {
            return (
                <div className="schedule-table filtering">
                    <table>
                        <tbody>
                            <tr>
                                <td className="day-time">Fitness Class</td>
                                <td className={`monday ts-item ${this.props.week === "Monday" ? "show" : ""}`}>10:00AM - 11:30AM</td>
                                <td className={`tuesday ts-item${this.props.week === "Tuesday" ? "show" : ""}`}>2:00PM - 3:30PM</td>
                                <td>William G. Stewart</td>
                            </tr>
                            <tr>
                                <td className="day-time">Muscle Training</td>
                                <td className={`friday ts-item ${this.props.week === "Friday" ? "show" : ""}`}>10:00AM - 11:30AM</td>
                                <td className={`thursday friday ts-item ${(this.props.week === "Friday" || this.props.week === "Thursday") ? "show" : ""}`}>2:00PM - 3:30PM</td>
                                <td>Paul D. Newman</td>
                            </tr>
                            <tr>
                                <td className="day-time">Body Building</td>
                                <td className={`tuesday ts-item ${this.props.week == "Tuesday" ? "show" : ""}`}>10:00AM - 11:30AM</td>
                                <td className={`monday ts-item ${this.props.week === "Monday" ? "show" : ""}`}>2:00PM - 3:30PM</td>
                                <td>Boyd C. Harris</td>
                            </tr>
                            <tr>
                                <td className="day-time">Yoga Training Class</td>
                                <td className={`wednesday ts-item ${this.props.week == "Wednesday" ? "show" : ""}`}>10:00AM - 11:30AM</td>
                                <td className={`friday ts-item ${this.props.week == "Friday" ? "show" : ""}`}>2:00PM - 3:30PM</td>
                                <td>Hector T. Daigle</td>
                            </tr>
                            <tr>
                                <td className="day-time">Advanced Training</td>
                                <td className={`thursday ts-item ${this.props.week == "Thursday" ? "show" : ""}`}>10:00AM - 11:30AM</td>
                                <td className={`wednesday ts-item ${this.props.week == "Wednesday" ? "show" : ""}`}>2:00PM - 3:30PM</td>
                                <td>Bret D. Bowers</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
        return null;
    }
}


ScheduleTable.propTypes = {}
export default ScheduleTable