import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishList } from '../Redux/wishlistSlice'
import { addCartItem } from '../Redux/cartSlice'






function View() {

  const dispatch=useDispatch()
  const [product,setProduct]=useState({})
  console.log(product);

  const userWishlist=useSelector(state=>state.WishlistReducer)
  const userCart=useSelector(state=>state.cartReducer)
  console.log(userWishlist);
  
  
  const {id}=useParams()
  console.log(id);
  


  useEffect(() => {

    if(localStorage.getItem("products")){
      const allProducts=JSON.parse(localStorage.getItem("products"))
      console.log(allProducts);
      setProduct(allProducts.filter(item=>item.id==id)[0])
      
    }
   
  }, [])

  const handleWishlist=()=>{

    if(userWishlist?.includes(product)){
      alert("product already added")
    }
    else{

      dispatch(addToWishList(product))

    }

  }

  const handleCart=()=>{

    const existingProduct=userCart.find(item=>item.id==product.id)

    if(existingProduct){
      alert("product quantity incremented")
      dispatch(addCartItem(product))
    }
    else{
      dispatch(addCartItem(product))
    }

  }
  
  return (
   
    <>
     <Header />

    
   <div className="row  p-5 align-items-center" style={{marginTop:'130px'}}>
    <div className="col-lg-1"> </div>
    <div className="col-lg-4">
        <img src={product?.thumbnail} alt="" height={'350px'}/>
    </div>

    <div className="col-lg-1"></div>
    <div className="col-lg-5">

       <h4 className='text-secondary'> Product ID:{product?.id}</h4>
       <h2>{product?.title}</h2>

       <h3 className='text-danger'>$ {product?.price}</h3>
       <p style={{textAlign:'justify'}}>{product?.description}</p>
       <div className='d-flex justify-content-between'>
        <button onClick={handleWishlist} className='btn btn-outlined'><i className="fa-solid fa-heart-circle-plus text-danger"></i></button>
        <button onClick={handleCart} className='btn btn-outlined'><i class="fa-solid fa-cart-plus text-success"></i></button>
       </div>

    </div>


   </div>
    
    </>
  )
}

export default View