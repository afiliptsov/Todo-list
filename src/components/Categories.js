import React from 'react'
import {FiDelete} from 'react-icons/fi'

const Categories = props => {
  const {categoriesList, addCategory, removeCategory} = props
  return (
    <ul>
      {categoriesList.map(category => (
        <li key={category.id}>
          {category.key} <FiDelete />{' '}
        </li>
      ))}
    </ul>
  )
}

export default Categories
