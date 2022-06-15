import React, { useState } from 'react'
import Todo from './components/Todo'
import './App.css';





function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
      </header>
      <Todo/>
    </div>
  );
}

export default App;
