import React from 'react'
import "./FilterCategory.css"
import { filterCategoriesList } from '../../assets/assets'

const FilterCategory = () => {

    

  return (
    <>
        {
            filterCategoriesList.map((category, index) => {
                return (
                    <div key={index} className='filter-category-item'>
                        <div className='filter'>
                            <p>{category}</p>
                            <img src='/plus.png' alt='addIcon'/>
                        </div>
                        {index === (filterCategoriesList.length -1) ? <></> : <hr/>}
                        
                    </div>
            )})
        }
    </> 
  )
}

export default FilterCategory