import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddItem(props) {
  const [title, setTitle] = useState('');

  const handleChange = (e) => setTitle(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addItem(title);
    setTitle('');
  };

  return (
    <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        style={{ flex: '10', padding: '5px' }}
        placeholder='Add Item...'
        value={title}
        onChange={handleChange}
      />
      <input
        type='submit'
        value='submit'
        className='btn'
        style={{ flex: '1' }}
      />
    </form>
  );
}

AddItem.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddItem;
