import React from 'react'
import {TiDeleteOutline} from 'react-icons/ti'
import {BiCheckboxChecked, BiCheckbox} from 'react-icons/bi'
import '../styles/ToDo.css'

const TodoListItem = props => {
  const {todoListItems, removeTodoItem, checkListItem} = props

  return (
    <>
      {todoListItems !== undefined ? (
        <ul>
          {todoListItems.map(activeCategory =>
            // Support for multiple active categories
            activeCategory.list.map(item => (
              <li key={item.id}>
                <div
                  key={item.id}
                  onClick={() => checkListItem(activeCategory.key, item)}
                >
                  {item.checked ? <BiCheckboxChecked /> : <BiCheckbox />}
                </div>
                {item.description}
                <TiDeleteOutline
                  onClick={() => removeTodoItem(activeCategory.key, item)}
                />
              </li>
            )),
          )}
        </ul>
      ) : (
        <div>Please select Category</div>
      )}
    </>
  )
}

export default TodoListItem