import React, { useContext } from 'react'
import "./ProductsListingPage.css"
import FilterCategory from '../FilterCategories/FilterCategory'
import { filterCategoriesList } from '../../assets/assets'
import { productsListArray } from '../../assets/assets'
import ProductItem from '../ProductItem/ProductItem'
import ModelPopup from '../ModelPopup/Model'
import { StoreContext } from '../../context/StoreContext'


const ProductsListingPage = () => {

    const {showModel} = useContext(StoreContext)

  return (<>
    <div className='products-listing-page'>
        <div className='left'>
            <div className='filter-heading'>
                <p>Filter</p>
                <p>CLEAR ALL</p>
            </div>
            <hr/>
            <FilterCategory/>
        </div>
        {showModel ? <ModelPopup /> : <></>}
        <div className='right'>
            <div className='product-count'>
                <p>300 products</p>
                <select className='sort-options'>
                    <option>SORT BY</option>
                    {
                        filterCategoriesList.map((category, index) => {
                            return (
                                <option key={index} value={category}>{category}</option>
                            )
                        })
                    }
                </select>
            </div>
            
            <div className='product-items-list'>
                {
                    productsListArray.map((product, index) => {
                        return (
                            <ProductItem key={index} product={product}/>
                        )
                    })
                }
            </div>
            
        </div>
    </div>
    <div className='pagination'>
        <button>Pagination</button>
    </div>
    </>
  )
}

export default ProductsListingPage