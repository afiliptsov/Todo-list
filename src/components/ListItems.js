import React from 'react'
import {TiDeleteOutline} from 'react-icons/ti'
import {BiCheckboxChecked, BiCheckbox} from 'react-icons/bi'
import '../styles/TodoListItem.css'
import PropTypes from 'prop-types'

const ListItems = props => {
  const {todoListItems, removeTodoItem, toggleItem} = props

  return (
    <div className="toDoListWrapper">
      {todoListItems.length ? (
        <ul>
          {todoListItems.map(activeCategory =>
            // Support for multiple active categories
            activeCategory.list.map(item => (
              <div className="toDoListItem" key={item.id}>
                <div
                  className="todoListItemIcon"
                  onClick={() => toggleItem(activeCategory.id, item)}
                >
                  {item.checked ? <BiCheckboxChecked /> : <BiCheckbox />}
                </div>
                <li>
                  <div
                    className="categoryToggle"
                    data-testid={item.description}
                  >
                    {item.description}
                  </div>
                </li>
                <div className="todoListItemIcon todoListItemDeleteIcon">
                  <TiDeleteOutline
                    onClick={() => removeTodoItem(activeCategory.id, item)}
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

//props type checking
ListItems.propTypes = {
  todoListItems: PropTypes.array,
  removeTodoItem: PropTypes.func,
  toggleItem: PropTypes.func,
}

export default ListItems
