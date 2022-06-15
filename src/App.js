import React, { useState } from 'react'
import Categories from './components/Categories';
import './App.css';

//Mockup of initialState
const initialState = [
  {
    key: 'groceries',
    active: false,
    id: 1,
    list: [
      {
        id: 1,
        item: 'Buy groceries',
        checked: false

      },
      {
        id: 2,
        item: 'Buy tomatoes',
        checked: true
      }
    ]
  },
  {
    key: 'sports',
    active: false,
    id: 2,
    list: [
      {
        id: 1,
        item: 'Buy ball',
        checked: false

      },
      {
        id: 2,
        item: 'Buy rocket',
        checked: true
      }
    ]
  }
]




function App() {
  const [category, setCategory] = useState(initialState)

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
      </header>
      <Categories categoriesList={category} />
    </div>
  );
}

export default App;
