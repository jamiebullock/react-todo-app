import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import List from './components/List';
import Header from './components/layout/header';
import AddItem from './components/AddItem';
import About from './components/pages/About';

import './App.css';
import axios from 'axios';
let idCounter = 0;
const axiosURL = 'http://jsonplaceholder.typicode.com/todos';

function getID() {
  console.log(idCounter);

  return idCounter++;
}

function App() {
  const [items, setItems] = useState([
  ]);

  useEffect( () => {
    console.log("Calling effect");
    
    axios.get(axiosURL+'?_limit=10')
    .then(res => setItems(res.data))
  }, []);   // [] added to prevent useEffect being called every render, see: https://www.andreasreiterer.at/react-useeffect-hook-loop/

  const markComplete = (id, e) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item,
    );
    setItems(newItems);
  };

  const deleteItem = (id) => {
    axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res  =>setItems([...items.filter((item) => item.id !== id)]))
    ;
  };

  const addItem = (title) => {
    console.log("Adding Item");
    
    axios.post(axiosURL, {
      title,
      completed: false
    })
    .then(res => {
      setItems([...items, res.data]);
    });
    
  };

  return (
    <Router>
      <div className='App'>
        <div className='container'>
          <Header />
          <Route
            exact path='/'
            render={(props) => (
              <React.Fragment>
                <AddItem addItem={addItem} />
                <List
                  list={items}
                  markComplete={markComplete}
                  delTodo={deleteItem}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
