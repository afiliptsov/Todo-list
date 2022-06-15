import React from 'react'

const Categories = (props) => {
    const {categoriesList} = props;
    return(
        <ul>
            {categoriesList.map(category => <li key={category.id}>{category.key}</li>)}
        </ul>
    )
}

export default Categories;