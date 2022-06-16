import React from 'react'
import {FiDelete} from 'react-icons/fi'
import '../styles/Categories.css'
import PropTypes from 'prop-types'

const Categories = props => {
  const {categoriesList, toggleCategory, removeCategory} = props
  return (
    <div className="categoriesWrapper">
      <ul>
        {categoriesList.map(category => (
          <div key={category.id} className="categorySection">
            <li
              onClick={() => toggleCategory(category.id)}
              className={
                category.active ? 'listCategory activeCategory' : 'listCategory'
              }
              key={category.id}
            >
              <span>{category.key}</span>
            </li>
            <FiDelete
              onClick={() => removeCategory(category.id)}
              className="icon"
            />
          </div>
        ))}
      </ul>
    </div>
  )
}

//props type checking
Categories.propTypes = {
  categoriesList: PropTypes.array,
  categoriestoggleCategoryList: PropTypes.func,
  removeCategory: PropTypes.func,
}

export default Categories
