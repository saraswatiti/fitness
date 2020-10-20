import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class TabNav
**/

class TabNav extends Component {
    render() {
        return (
            <ul>
                {

                    this.props.tabs.map(tab => {
                        const active = (tab === this.props.selected ? "active" : "");
                        return (
                            <li key={tab}>
                                <a className={"nav-link " + active} onClick={() => this.props.setSelected(tab)}>
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/tabs-first-icon.png`} alt="tabnav images" />
                                    {tab}
                                </a>
                            </li>
                        )
                    }
                    )}
                <div className="main-rounded-button"><a href="#">View All Schedules</a></div>

            </ul>
        )
    }
}


TabNav.propTypes = {}
export default TabNav