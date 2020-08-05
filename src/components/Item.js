import React from 'react'
import PropTypes from 'prop-types'


function Item(props) {

    const getStyle = () => ({
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc  dotted',
        textDecoration: props.item.completed ? 'line-through' : 'none'
    });

    console.log(props);

    return (
        <div style={getStyle()}>
            <p>
                <input type="checkbox" onChange={ (e) => props.markComplete(props.item.id, e)} /> {' '}
                { props.item.title }
            </p>
        </div>
    )
}

Item.propTypes = {
    item: PropTypes.object.isRequired
}



export default Item

