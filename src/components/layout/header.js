import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function header(props) {
    return (
        <header style={headerStyle}>
            <h1>My List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
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

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default header

