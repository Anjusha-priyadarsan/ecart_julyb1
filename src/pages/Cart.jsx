import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, emptyCart, incQunatity, removeCartItem } from '../Redux/cartSlice'
import { Link, useNavigate } from 'react-router-dom'






function Cart() {
  const userCart=useSelector(state=>state.cartReducer)
  const navigate=useNavigate()
 

  const [totalCartItem,setTotalCartItem]=useState(0)
  const [totalCartAmount,setTotalCartAmount]=useState(0)
  useEffect(() => { 

    if(userCart?.length>0){
      setTotalCartItem(userCart.length)
      setTotalCartAmount(userCart.map(pro=>pro.totalPrice).reduce((t1,t2)=>t1+t2))

    }
  
  }, [userCart])
  
 const dispatch=useDispatch()

  const handleDecrementQuantity=(product)=>{
    if(product.quatintity>1){
      dispatch(decQuantity(product.id))
    }
    else{
      dispatch(removeCartItem(product.id))
    }
  }

  const checkOut=()=>{

    dispatch(emptyCart())
    alert("your order place successfully..Thank you for purchasing with us!!")
    navigate('/')
   
  }
  return (
    <>
    <Header />
    <div className="container" style={{marginTop:'150px'}}>
    <h3 className='text-danger'>Cart Summary</h3>
     { userCart?.length >0 ?
      
      <div className="row mt-5">
        <div className="col-lg-8">
          <table className='table'>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
            {
              userCart?.map(product=>(
                <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td><img src={product.thumbnail} alt="" height={'50px'} width={'50px'}/></td>
                <td>
                  <button onClick={()=>handleDecrementQuantity(product)} style={{height:''}} className='btn fw-bold me-3'>-</button>
                  <input className='border border-white' type="text" readOnly style={{width:'30px'}}  value={product.quatintity}/>
                  <button onClick={()=>dispatch(incQunatity(product.id))} className='btn fw-bold'>+</button>

                </td>
                <td>{product.totalPrice}</td>
              
                <td><button onClick={()=>dispatch(removeCartItem(product.id))} className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
              </tr>
              ))
            }
            </tbody>

          </table>
          <div className="">
            <button onClick={()=>dispatch(emptyCart())} style={{marginLeft:'450px'}} className='btn btn-danger me-3'> Empty Cart</button>
            <Link to={'/'} className='btn btn-primary'> Shope More</Link>
          </div>

        </div>
        <div className="col-lg-4">

          <div className='shadow p-3'>
            <h5>Total Items:<span className='text-danger'>{totalCartItem}</span></h5>
           <h4> Total Amount:<span className='text-danger'>${totalCartAmount}</span></h4>
           <button onClick={checkOut} className='btn btn-warning w-100'>Checkout</button>


          </div>

        </div>
      </div>
      :
      <div className='d-flex align-items-center justify-content-center flex-column ' >
      <img src="https://img.freepik.com/premium-vector/empty-cart_701961-7086.jpg" alt="" />
      <h3 className='text-success'>Your Cart is empty</h3>
    </div>

      
    }

    </div>
   
    </>
  )
}

export default Cart