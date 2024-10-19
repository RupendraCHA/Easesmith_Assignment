import React from 'react'
import "./Searchbar.css"

const Searchbar = () => {
  return (
    <div className='search-bar'>
        <div className='search-container'>
            <img src="/search.png" alt='search-icon'/>
            <input type='text' placeholder='Search Plant' className='search-input'/>
            <img src="/search_leaf.png" alt='search-icon'/>
        </div>
    </div>
  )
}

export default Searchbar