import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Footer from './components/Footer'
import View from './pages/View'





function App() {

  return (
    <>
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Cart />} path='/cart' />
      <Route element={<Wishlist />} path='/wishlist' />
      <Route element={<View />} path='/:id/view' />
      
      <Route element={<Navigate to={'/'}/>}  path='/*'/>



    </Routes>
    <Footer />
   
    </>
  )
}

export default App
