import React from 'react'
import {TiDeleteOutline} from 'react-icons/ti'
import {BiCheckboxChecked, BiCheckbox} from 'react-icons/bi'

const TodoListItem = props => {
  const {todoListItems, removeTodoItem, checkListItem} = props
  return (
    <ul>
      {todoListItems.list.map(item => (
        <li key={item.id}>
          <div
            key={item.id}
            onClick={() => checkListItem(todoListItems.key, item)}
          >
            {item.checked ? <BiCheckboxChecked /> : <BiCheckbox />}
          </div>
          {item.description}
          <TiDeleteOutline
            onClick={() => removeTodoItem(todoListItems.key, item)}
          />
        </li>
      ))}
    </ul>
  )
}

export default TodoListItem
