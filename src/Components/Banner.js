import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import BannerImg from "./../assets/girls.png"
import ScrollText from 'react-scroll-text'

function Banner() {
  return (
   <div className="banner">

    <Container>
        <Row className='align-items-center'>
            <Col xs={12} md={6}>
            <div>
                <h2>Welcome To</h2>
                <p>My Portfolio</p>
            </div>

            </Col>

            <Col xs={12} md={6}>
            <img className='img-fluid' src={BannerImg} alt="" />
            </Col>
        </Row>
    </Container>

   </div>
  )
}

export default Banner