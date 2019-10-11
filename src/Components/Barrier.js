import React from 'react'
import PropTypes from 'prop-types'

const barrier = ({ props }) => (
    <div className= ''>
        <div className= 'pointer hover-bg-black-10 bg-animate pv2 ph1'>
            <h3>{this.props.value}</h3>
            <p>{this.props.text}</p>
        </div>
    </div>
)

barrier.propTypes = {
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default barrier;
