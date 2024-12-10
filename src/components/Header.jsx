import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { serachProduct } from '../Redux/productSlice';




function Header({insideHome}) {
  const userWishlist=useSelector(state=>state.WishlistReducer)
  const userCart=useSelector(state=>state.cartReducer)

  
  const dispatch=useDispatch()
  return (
    <>
     <Navbar expand="lg" className="bg-success w-100  position-fixed top-0" style={{zIndex:'10'}}>
      <Container>
        <Navbar.Brand ><Link className='fw-bold text-white text-decoration-none fs-3' to={'/'}><i class="fa-solid fa-store"></i> Fashion Store</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {insideHome &&<Nav.Link>
                <input onChange={e=>{dispatch(serachProduct(e.target.value.toLowerCase()))}} type="text" style={{width:'500px'}} className='rounded p-1 border border-white me-5' placeholder='enter the product nam here!!' />
            </Nav.Link>}
            <Nav.Link ><Link to={'/wishlist'}><i class="fa-solid fa-heart" style={{color:'red',fontSize:'25px'}}></i><Badge bg="secondary">{userWishlist?.length}</Badge></Link></Nav.Link>
            <Nav.Link ><Link to={'/cart'}><i class="fa-solid fa-cart-shopping" style={{color:'green',fontSize:'25px'}}></i><Badge bg="secondary">{userCart?.length}</Badge></Link></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </>
  )
}

export default Header