import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class TabNav
**/

class TabNav extends Component {
    state = {}
    render() {
        return (
            <ul>
                {

                    this.props.tabs.map(tab => {
                        const active = (tab === this.props.selected ? "active" : "");
                        return (
                            <li>
                                <a className={"nav-link " + active} onClick={this.props.setSelected}>
                                    {tab}
                                </a>
                            </li>
                        )
                    }
                    )}

            </ul>
        )
    }
}


TabNav.propTypes = {}
export default TabNav