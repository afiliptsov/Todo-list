import React from 'react'
import {FiDelete} from 'react-icons/fi'
import '../styles/Categories.css'
import PropTypes from 'prop-types'

const Categories = props => {
  const {categoriesList, toggleCategory, removeCategory} = props
  return (
    <div className="categoriesWrapper" data-testid="categoriesComponent">
      <ul>
        {categoriesList.map(category => (
          <p key={category.id} className="categorySection">
            <li
              onClick={() => toggleCategory(category.id)}
              className={
                category.active ? 'listCategory activeCategory' : 'listCategory'
              }
              key={category.id}
            >
              <span data-testid={category.key}>{category.key}</span>
            </li>

            <FiDelete
              data-testid={`${category.key}-delete`}
              onClick={() => removeCategory(category.id)}
              className="icon"
            />
          </p>
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
