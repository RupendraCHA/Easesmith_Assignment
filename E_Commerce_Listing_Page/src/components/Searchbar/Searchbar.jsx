import React, { useContext, useState } from 'react'
import "./Searchbar.css"
import { StoreContext } from '../../context/StoreContext.jsx'

const Searchbar = () => {

  const {searchItem, setSearchItem} = useContext(StoreContext)
  return (
    <div className='search-bar'>
        <div className='search-container'>
            <img src="/search.png" alt='search-icon'/>
            <input type='text' placeholder='Search Plant Name here...'
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
             className='search-input'/>
            <img src="/search_leaf.png" alt='search-icon'/>
        </div>
    </div>
  )
}

export default Searchbar