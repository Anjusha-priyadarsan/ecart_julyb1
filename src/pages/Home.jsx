import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/productSlice';
import Spinner from 'react-bootstrap/Spinner';
import Pagination from '../components/Pagination';



function Home() {
 const{allProducts,loading,error}= useSelector(state=>state.productReducer)
 const [currentPage,setCurrentPage]=useState(2)
 const [cardperPage,setCardPerPage]=useState(6)

  const dispatch=useDispatch()
  useEffect(() => {

    dispatch(fetchProducts())
   
  }, [])

  let endingIndex=currentPage*cardperPage
  let startingIndex=endingIndex-cardperPage
  let currentPost=allProducts.slice(startingIndex,endingIndex)
  
  return (
    <>
      <Header insideHome={true} />
      <div style={{ marginTop: '150px' }} className="container-fluid">

       { loading ?

       <div className='text-center mt-5'>
            <Spinner animation="border" variant="success" />
       </div>
      
       :
       
       <Row className='mt-5 de-flex justify-content-center '>
          {
            currentPost?.length>0 ?
            currentPost?.map(product=>(
            <Col key={product?.id} xl={3} lg={4} md={6} xs={12} className='mb-5 me-2'>

              <Card style={{ width: '16rem' }} >
                <Card.Img variant="top" src={product.thumbnail}  height={'250px'}/>
                <Card.Body className='text-center'>
                  <Card.Title>{product.title.slice(0,15)}...</Card.Title>
                 <div className='text-center'>
                  <Link to={`/${product?.id}/view`} className='text-danger text-decoration-none fw-bold'>View More...</Link>
                 </div>
                </Card.Body>
              </Card>
  
  
            </Col>))

            :
            <div className='text-success fw-bold'>Nothing to display</div>
          }
        </Row>
        }

        {
          currentPost?.length>0 &&
          <Pagination  totalProducts={allProducts.length} cardPerPage={cardperPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>

        }
      </div>

    </>
  )
}

export default Home