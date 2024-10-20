
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer.jsx"
import ProductsListingPage from './components/ProductsListingPage/ProductsListingPage.jsx'
import Thankyou from './components/ThankyouPage/Thankyou.jsx'



const App = () => {

  return (
    <div className='app'>
      <Header/>
      <Routes>
        <Route exact path='/' element={<ProductsListingPage/>}></Route>
        <Route exact path='/thankyou' element={<Thankyou/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
