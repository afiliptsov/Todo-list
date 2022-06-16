import React from 'react'
import {TiDeleteOutline} from 'react-icons/ti'
import {BiCheckboxChecked, BiCheckbox} from 'react-icons/bi'
import '../styles/TodoListItem.css'

const TodoListItem = props => {
  const {todoListItems, removeTodoItem, toggleItem} = props
  console.log('todoListItems', todoListItems)

  return (
    <div className="toDoListWrapper">
      {todoListItems.length ? (
        <ul>
          {todoListItems.map(activeCategory =>
            // Support for multiple active categories
            activeCategory.list.map(item => (
              <div className="toDoListItem" key={item.id}>
                {console.log('Item checked', item.checked)}
                <div
                  className="todoListItemIcon"
                  onClick={() => toggleItem(activeCategory.key, item)}
                >
                  {item.checked ? <BiCheckboxChecked /> : <BiCheckbox />}
                </div>
                <li>
                  <div className="categoryToggle"></div>
                  {item.description}
                </li>
                <div className="todoListItemIcon todoListItemDeleteIcon">
                  <TiDeleteOutline
                    onClick={() => removeTodoItem(activeCategory.key, item)}
                  />
                </div>
              </div>
            )),
          )}
        </ul>
      ) : (
        <div>Please add or select a Category</div>
      )}
    </div>
  )
}

export default TodoListItem
