import React from 'react'
import {FiDelete} from 'react-icons/fi'
import '../styles/Categories.css'

const Categories = props => {
  const {categoriesList, activateCategory, addCategory, removeCategory} = props
  return (
    <div className="categoriesWrapper">
      <ul>
        {categoriesList.map(category => (
          <li onClick={() => activateCategory(category.id)} key={category.id}>
            {category.key}
            <FiDelete />{' '}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
