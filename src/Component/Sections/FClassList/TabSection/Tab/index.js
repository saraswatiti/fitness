import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class Tab
**/

class Tab extends Component {
    state = {}
    render() {
        if (this.props.isSelected) {
            return (
                <div>
                    { this.props.children}
                </div>
            );
        }
        return null;
    }
}



Tab.propTypes = {}
export default Tab