import React from 'react'
import {FiDelete} from 'react-icons/fi'
import '../styles/Categories.css'

const Categories = props => {
  const {categoriesList, toggleCategory, addCategory, removeCategory} = props
  return (
    <div className="categoriesWrapper">
      <ul>
        {categoriesList.map(category => (
          <li
            className={
              category.active ? 'listCategory activeCategory' : 'listCategory'
            }
            // style={category.active ? {color: 'red'} : {color: 'blue'}}
            onClick={() => toggleCategory(category.id)}
            key={category.id}
          >
            {category.key}
            <FiDelete className="icon" />{' '}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
