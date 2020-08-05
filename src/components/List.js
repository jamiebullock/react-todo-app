
import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

function List(props) {
  
  const rv = props.list.map((item) => (
    <Item key={item.id} item={item} markComplete={props.markComplete} />
  ));  

  return rv;
}

// PropTypes
List.propTypes = {
  list: PropTypes.array.isRequired
}

export default List;
