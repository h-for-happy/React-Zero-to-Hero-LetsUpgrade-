import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Footer extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <div className="Footer" >
                    <p style={{"text-align":"center"}}>@ Copyrights 2021 | All Rights Reserved</p>
                </div>
            </div>
        )
    }
}
