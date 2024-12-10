import React from 'react'
import Header from '../components/Header'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../Redux/wishlistSlice'
import { addCartItem } from '../Redux/cartSlice'





function Wishlist() {
  const userWishlist=useSelector(state=>state.WishlistReducer)
  const userCart=useSelector(state=>state.cartReducer)
  console.log(userWishlist);
  const dispatch=useDispatch()


  const handleCart=(product)=>{
    
    const existingProduct=userCart.find(item=>item.id==product.id)

    if(existingProduct){
      alert("product quantity incremented")
      dispatch(addCartItem(product))
      dispatch(removeWishlistItem(product.id))
    }
    else{
      dispatch(addCartItem(product))
      dispatch(removeWishlistItem(product.id))
    }

  }
  
  return (
    <>
    <Header />
   {
    userWishlist?.length>0 ?
    <div style={{ marginTop: '150px' }} className="container-fluid">

      <h3 className='text-danger'>Your Wishlist</h3>

        <Row className='container'>
          {
            userWishlist?.map(item=>(
              <Col xl={3} lg={4} md={6} xs={12} className='mb-2 me-2'>

            <Card style={{ width: '15rem' }} className='me-2 mb-2' >
              <Card.Img variant="top" src={item?.thumbnail}  height={'250px'}/>
              <Card.Body className='text-center'>
                <Card.Title>{item?.title.slice(0,10)}... </Card.Title>
               <div className='d-flex justify-content-between'>

               <button onClick={()=>dispatch(removeWishlistItem(item?.id))} className='btn btn-outlined'><i class="fa-solid fa-heart-circle-xmark text-danger"></i></button>
               <button onClick={()=>handleCart(item)} className='btn btn-outlined'><i class="fa-solid fa-cart-plus text-success"></i></button>
               
               </div>
              </Card.Body>
            </Card>


          </Col>
            ))
          }
        </Row>

      </div>

      :
      <div className='d-flex align-items-center justify-content-center flex-column ' style={{marginTop:'100px'}}>
        <img src="https://png.pngtree.com/png-vector/20221121/ourmid/pngtree-comicstyle-wishlist-icon-with-splash-effect-health-sign-add-vector-png-image_41870708.jpg" alt="" />
        <h3 className='text-success'>Your wish list is empty</h3>
      </div>
      
      }

    </>
  )
}

export default Wishlist