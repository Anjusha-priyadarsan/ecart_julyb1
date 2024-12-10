import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
  

<div className='mt-5  text-white bg-success p-3' style={{ height: '450px' }}>
      <div className="row p-5">
        <div className="col-lg-4" style={{ textAlign: 'justify' }}>
          <h5>
          

            <i class="fa-solid fa-store"></i>   &nbsp; Fashion Store
          </h5>

          <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora id placeat sit fuga natus explicabo assumenda velit neque dolorum aliquam iusto voluptate deserunt maxime</p>
          <p>code is liscensed by luminar</p>
          <p>currently v5.3.2</p>

        </div>
        <div className="col-lg-2 text-center">
          <h5>Links</h5>
          <div>  <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link></div>
          <div>
            <Link to={'/history'} style={{ textDecoration: 'none', color: 'white' }}>Cart</Link>

          </div>
          <div><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Wishlist</Link></div>


        </div>
        <div className="col-lg-2 ">
          <h5>Guids</h5>
          <div><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>React</Link></div>
          <div><Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</Link>
          </div>
          <div>
            <Link to={'/history'} style={{ textDecoration: 'none', color: 'white' }}>React Router</Link>

          </div>

        </div>
        <div className="col-lg-3">
          <h5>Contact Us</h5>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <input type="text" className='form-control' placeholder='"enter your email' />
            <button className='btn btn-success ms-3'><i className="fa-solid fa-arrow-right "></i></button>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <a href=""><i className="fa-brands fa-facebook" style={{ color: 'white', fontSize: '20px' }}></i></a>
            <a href=""><i className="fa-brands fa-twitter" style={{ color: 'white', fontSize: '20px' }}></i></a>
            <a href=""><i className="fa-brands fa-instagram" style={{ color: 'white', fontSize: '20px' }}></i></a>
            <a href=""><i className="fa-brands fa-linkedin" style={{ color: 'white', fontSize: '20px' }}></i></a>
            <a href=""><i className="fa-brands fa-github" style={{ color: 'white', fontSize: '20px' }}></i></a>
            <a href=""><i className="fa-solid fa-phone" style={{ color: 'white', fontSize: '20px' }}></i></a>



          </div>

        </div>
      </div>

      <p className='text-center mt-5'>Copyright © july 2024 Batch, Media Player , Built with rect</p>



    </div>

    
  )
}

export default Footer