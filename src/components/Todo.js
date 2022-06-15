import React, {useState} from 'react'
import Categories from './Categories'
import TodoListItem from './TodoListItem'

//Mockup of initialState
const initialState = [
  {
    key: 'groceries',
    active: true,
    id: 1,
    list: [
      {
        id: 12,
        description: 'Buy groceries',
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
const removeCategory = () => {}
const addTodoItem = () => {}

const Todo = () => {
  const [items, setItems] = useState(initialState)

  const removeTodoItem = (category, listItemId) => {
    let updatedItems = items.map(item =>
      item.key === category
        ? {...item, list: item.list.filter(x => x.id !== listItemId.id)}
        : item,
    )
    setItems(updatedItems)
  }

  const checkListItem = (category, listItemId) => {
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

  return (
    <div>
      <Categories removeCategory addCategory categoriesList={items} />
      <TodoListItem
        checkListItem={checkListItem}
        removeTodoItem={removeTodoItem}
        todoListItems={items.filter(category => category.active)[0]}
      />
    </div>
  )
}

export default Todo
