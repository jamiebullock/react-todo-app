import React from 'react'
import PropTypes from 'prop-types'


function Item(props) {

    const getStyle = () => ({
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc  dotted',
        textDecoration: props.item.completed ? 'line-through' : 'none'
    });

    const {id, title} = props.item;

    return (
        <div style={getStyle()}>
            <p>
                <input type="checkbox" onChange={ (e) => props.markComplete(id, e)} /> {' '}
                { title }
                <button style={btnStyle} onClick={ (e) => props.delTodo(id, e)} >x</button>
            </p>
        </div>
    )
}

Item.propTypes = {
    item: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default Item

