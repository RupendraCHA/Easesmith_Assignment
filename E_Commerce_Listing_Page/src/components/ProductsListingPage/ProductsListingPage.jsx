import React, { useContext, useState } from 'react'
import "./ProductsListingPage.css"
import FilterCategory from '../FilterCategories/FilterCategory'
import { filterCategoriesList } from '../../assets/assets'
import { productsListArray } from '../../assets/assets'
import ProductItem from '../ProductItem/ProductItem'
import ModelPopup from '../ModelPopup/Model'
import { StoreContext } from '../../context/StoreContext'


const ProductsListingPage = () => {

    const {showModel, filteredProducts} = useContext(StoreContext)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentItems = productsListArray.slice(indexOfFirstItem, indexOfLastItem);
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

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
            {totalPages <= 0 ? (<div className='no-products'>
                  <h3>Sorry! There are no products available with your input.</h3>
                </div>) : ""}
            <div className='product-items-list'>
                {
                    currentItems.map((product, index) => {
                        return (
                            <ProductItem key={index} product={product}/>
                        )
                    })
                }
            </div>
            
        </div>
    </div>
    <div className='pagination'>
      <h1>Explore more products <span>(20 products/page)</span></h1>
      <nav>
        <ul className="pagination1">
          <li
            className={`page-item common-pagination previous ${currentPage === 1 ? 'disabled' : ''}`}
          >
            <span onClick={() => paginate(currentPage - 1)}>Previous</span>
          </li>

          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`page-item common-pagination number ${currentPage === index + 1 ? 'active' : ''}`}
            >
              <span>{index + 1}</span>
            </li>
          ))}

          <li
            className={`page-item common-pagination next ${currentPage === totalPages ? 'disabled' : ''}`}
          >
            <span onClick={() => paginate(currentPage + 1)}>Next</span>
          </li>
        </ul>
      </nav>
    </div>
    </>
  )
}

export default ProductsListingPage