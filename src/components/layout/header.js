import React from 'react'
import PropTypes from 'prop-types'

function header(props) {
    return (
        <header style={headerStyle}>
            <h1>My List</h1>
        </header>
    )
}

header.propTypes = {

}

const headerStyle = {
    background: "#333",
    color: "#fff",
    textAlign: 'center',
    padding: '10px'
}

export default header

