import React, { useState } from "react";
import List from "./components/List";
import Header from "./components/layout/header";
import AddItem from "./components/AddItem";

import "./App.css";
let called = false;
let idCounter = 0;

function getID()
{
  return idCounter++;
}


function App() {
  const [items, setItems] = useState([
    {
      id: getID(),
      title: "Take out the trash",
      completed: false,
    },
    {
      id: getID(),
      title: "Dinner with wife",
      completed: false,
    },
    {
      id: getID(),
      title: "Write some new code",
      completed: false,
    },
  ]);

  const markComplete = (id, e) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(newItems);
  };

  const deleteItem = (id) => {
    setItems([...items.filter((item) => item.id !== id)]);
  };

  const addItem = (title) => {
    const newItem = {
      id: getID(),
      title,
      completed: false
    };
    setItems([...items, newItem]);
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddItem addItem={addItem} />
        <List
          list={items}
          markComplete={markComplete}
          delTodo={deleteItem}
        />{" "}
      </div>
    </div>
  );
}

export default App;
