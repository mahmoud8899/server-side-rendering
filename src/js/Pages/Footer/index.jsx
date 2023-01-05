import React from "react";
import { Container, Row, Col } from "react-bootstrap";



export default function Footer(){





    return <Container fluid className="margin-Top">
        <Row className='justify-content-center background-coloranther  padding '>
           <Col xs={12} sm={6} md={5} lg={5}>
              <h1 className="TitleFontSize text-transform ImageSize">Food design</h1>
              <h1 className="TitleFontSize text-transform">www.food-palace.com</h1>
           </Col>
           <Col xs={12} sm={6} md={2} lg={2}>
              <h1 className="TitleFontSize text-transform ImageSize">our menu</h1>
              <div className="flex  flex-column">
                  <span className="des text-transform">breakfasr</span>
                  <span className="des text-transform">lunce</span>
                  <span className="des text-transform">dinner</span>
              </div>
            
           </Col>

           <Col xs={12} sm={6} md={2} lg={2}>
              <h1 className="TitleFontSize text-transform ImageSize">information</h1>
              <div className="flex  flex-column">
                  <span className="des text-transform">about us</span>
                  <span className="des text-transform">testimonial</span>
                  <span className="des text-transform">event</span>
              </div>
            
           </Col>
           <Col xs={12} sm={6} md={2} lg={2}>
              <h1 className="TitleFontSize text-transform ImageSize">social handles</h1>
              <div className="flex  flex-column">
                  <span className="des text-transform">Facebook</span>
                  <span className="des text-transform">twitter</span>
                  <span className="des text-transform">youtube</span>
              </div>
            
           </Col>



           <div className="tWOmargin-bottom"    />

        </Row>

    </Container>
}