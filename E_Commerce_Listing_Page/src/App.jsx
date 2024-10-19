import React from 'react'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer.jsx"
import ProductsListingPage from './components/ProductsListingPage/ProductsListingPage.jsx'

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <ProductsListingPage/>
      <Footer/>
    </div>
  )
}

export default App
