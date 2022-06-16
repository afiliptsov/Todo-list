import React, {useState} from 'react'
import Categories from './Categories'
import ListItems from './ListItems'
import defaultState from './state/introState'
import '../styles/ToDo.css'

const Todo = () => {
  const [items, setItems] = useState(defaultState)
  const [userInput, setUserInput] = useState('')

  const addCategory = categoryName => {
    let newCategoryObject = {
      key: categoryName,
      active: false,
      id: Math.floor(Math.random() * 10000),
      list: [],
    }
    setItems([...items, newCategoryObject])
    // Cleaning input field
    setUserInput('')
  }

  const addListItem = listItem => {
    let findActiveCategory = items.filter(item => {
      return item.active
    })
    if (findActiveCategory.length !== 1) {
      alert('Please select active Category. Only 1 allowed.')
    } else {
      let listItemObject = {
        id: Math.floor(Math.random() * 10000),
        description: listItem,
        checked: false,
      }
      let addListItem = items.map(item =>
        item.active === true
          ? {...item, list: [...item.list, listItemObject]}
          : item,
      )
      setItems(addListItem)
      // Cleaning input field
      setUserInput('')
    }
  }

  const handleFormSubmit = (event, section) => {
    event.preventDefault()
    if (userInput.length === 0) {
      alert('Your input should have at least 1 character')
    } else {
      if (section === 'category') {
        addCategory(userInput)
      } else if (section === 'listItem') {
        addListItem(userInput)
      }
    }
  }

  const removeCategory = categoryId => {
    let updatedCategories = items.filter(item =>
      item.id === categoryId ? item.id !== categoryId : item,
    )
    setItems(updatedCategories)
  }

  const removeTodoItem = (categoryId, listItemId) => {
    let updatedItems = items.map(item =>
      item.id === categoryId
        ? {...item, list: item.list.filter(x => x.id !== listItemId.id)}
        : item,
    )
    setItems(updatedItems)
  }

  const toggleItem = (categoryId, listItemId) => {
    // This covers Check and UnCheck functionality for items list
    let checkedItem = items.map(item =>
      item.id === categoryId
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

  const toggleCategory = categoryId => {
    let testItem = items.map(item => {
      if (item.id === categoryId) {
        item.active = !item.active
      }
      return item
    })
    setItems(testItem)
  }

  return (
    <div className="todoWrapper">
      <div className="todoHeader">
        <h2 data-testid="todoListHeader">My ToDo List</h2>
        <label>{new Date().toDateString()}</label>
      </div>
      <div className="todoContent">
        <Categories
          data-testid="categories"
          toggleCategory={toggleCategory}
          removeCategory={removeCategory}
          categoriesList={items}
        />
        <ListItems
          data-testid="listItems"
          toggleItem={toggleItem}
          removeTodoItem={removeTodoItem}
          todoListItems={items.filter(category => category.active)}
        />
      </div>
      <form
        data-testid="submitForm"
        className="addSection"
        onSubmit={handleFormSubmit}
      >
        <input
          data-testid="textInput"
          type="text"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          placeholder="Category or Item"
        />
        <button
          data-testid="categorySubmit"
          id="category_submit"
          onClick={e => handleFormSubmit(e, 'category')}
        >
          Add Category
        </button>
        <button
          data-testid="listItemSubmit"
          id="listItem_submit"
          onClick={e => handleFormSubmit(e, 'listItem')}
        >
          Add item
        </button>
      </form>
    </div>
  )
}

export default Todo
