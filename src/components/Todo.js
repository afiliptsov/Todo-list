import React, {useState} from 'react'
import Categories from './Categories'
import TodoListItem from './TodoListItem'
import '../styles/ToDo.css'

//Mockup of initialState
const initialState = [
  {
    key: 'groceries',
    active: true,
    id: 1,
    list: [
      {
        id: 12,
        description: 'Buy groceries ',
        checked: false,
      },
      {
        id: 13,
        description: 'Buy tomatoes',
        checked: true,
      },
    ],
  },
  {
    key: 'sports',
    active: false,
    id: 2,
    list: [
      {
        id: 1,
        description: 'Buy ball',
        checked: false,
      },
      {
        id: 2,
        description: 'Buy rocket',
        checked: true,
      },
    ],
  },
]

const addCategory = () => {}

const addTodoItem = () => {}

const Todo = () => {
  const [items, setItems] = useState(initialState)

  const removeTodoItem = (category, listItemId) => {
    console.log('category', category)
    console.log('listItemId', listItemId)
    let updatedItems = items.map(item =>
      item.key === category
        ? {...item, list: item.list.filter(x => x.id !== listItemId.id)}
        : item,
    )
    setItems(updatedItems)
  }

  const toggleItem = (category, listItemId) => {
    // This covers Check and UnCheck functionality for items list
    let checkedItem = items.map(item =>
      item.key === category
        ? {
            ...item,
            list: item.list.map(x => {
              if (x.id === listItemId.id) {
                x.checked = !x.checked
              }
              return x
            }),
          }
        : item,
    )
    setItems(checkedItem)
  }

  const toggleCategory = id => {
    let testItem = items.map(item => {
      if (item.id === id) {
        item.active = !item.active
      }
      return item
    })
    setItems(testItem)
  }

  return (
    <div className="todoWrapper">
      <div className="todoHeader">
        <h2>To Do List</h2>
        <label>{new Date().toDateString()}</label>
      </div>
      <div className="todoContent">
        <Categories
          toggleCategory={toggleCategory}
          removeCategory
          addCategory
          categoriesList={items}
        />
        <TodoListItem
          toggleItem={toggleItem}
          removeTodoItem={removeTodoItem}
          //   todoListItems={items.filter(category => category.active)[0]}
          todoListItems={items.filter(category => category.active)}
        />
      </div>
      <div className="addSection">
        <div>Add Category</div>
        <div>Add item</div>
      </div>
    </div>
  )
}

export default Todo
