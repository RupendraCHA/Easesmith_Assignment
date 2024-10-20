
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer.jsx"
import ProductsListingPage from './components/ProductsListingPage/ProductsListingPage.jsx'
import Thankyou from './components/ThankyouPage/Thankyou.jsx'
import NotFound from './components/NotFound/NotFound.jsx'



const App = () => {

  return (
    <div className='app'>
      
      <Routes>
        <Route 
        exact path='/' element={
          <>
          <Header/>
          <ProductsListingPage/>
          <Footer/>
          </>
        }>
        </Route>
        <Route exact path='/thankyou' element={
          <>
            <Header/>
            <Thankyou/>
            <Footer/>
          </>
          }>
        </Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
