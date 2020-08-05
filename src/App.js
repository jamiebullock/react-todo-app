import React, { useState } from 'react';
import List from './components/List';


import './App.css';
let called = false;

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Take out the trash',
      completed: false
    },
    {
      id: 2,
      title: 'Dinner with wife',
      completed: false
    },
    {
      id: 3,
      title: 'Write some new code',
      completed: false
    }
  ]);

  const markComplete = (id, e) => {
    const newItems = items.map(item => item.id === id ? { ...item, completed: !item.completed } : item);
    setItems(newItems);
  }

  const delTodo = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  }

  return (
    <div className="App">
      <h1>Elenco</h1>
      <List list={items} markComplete={markComplete} delTodo={delTodo} />
    </div>
  );
}

export default App;
