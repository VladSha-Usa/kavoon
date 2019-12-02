import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Head from 'next/head'
import Nav from 'react-bootstrap/Nav'


import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'

import ListGroup from 'react-bootstrap/ListGroup'

const Home = () => (
  <div>
    <Head>
      <title>Flowers way. Країна очима велосипедистів</title>
      <link rel="icon" href="/icon.ico" />
    </Head>

    <Container>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Flowers way</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">


          <Nav
            activeKey="/"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
          >

            <Nav.Item >
              <Nav.Link href="#pathfinder">Pathfinder</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#blog">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#shop">Shop</Nav.Link>
            </Nav.Item>
          </Nav>
          <Image src="/line_750*50.png" fluid alt="Не вышло :(">

          </Image>
        </Navbar.Collapse>
      </Navbar>


      {/* Title */}
      <Row variant="secondary" style={{ 'text-align': 'center' }}><Col>
        <Image src="/title_1400*401.jpg" style={{ 'object-fit': 'cover', 'min-height': '200px' }} fluid alt="Не вышло :(" />
        <h1>Flowers way<br /> Країна очима велосипедистів</h1>
      </Col></Row>
      {/* Projects */}
      <Row>
        <Col className="hero">
          <center> <h2>Наші проекти</h2> </center>
        </Col>
      </Row>

      <Row>
        <Col style={{ 'text-align': 'center' }}>
          <div>Путівник</div>
          <Image src="/pathfinger_350*329.png" alt="Не вышло :("></Image>

        </Col>


        <Col style={{ 'text-align': 'center' }}>
          <div>Блог Flower`s way</div>
          <Image src="/blog_350*337.png"></Image>
        </Col>

        <Col style={{ 'text-align': 'center' }}>
          <div>Велоспорядження для легких подорожей</div>
          <Image src="/shop_350*318.png"></Image>
        </Col>
      </Row>
      <Row>
        <Col>Shop</Col>
      </Row>

      <Row>
        <Col style={{ 'text-align': 'center' }}>
          <div>Сумка1</div>
          <Image src="https://via.placeholder.com/300" alt="Не вышло :("></Image>

        </Col>
        <Col style={{ 'text-align': 'center' }}>
          <div>Сумка2</div>
          <Image src="https://via.placeholder.com/300" alt="Не вышло :("></Image>

        </Col>
        <Col style={{ 'text-align': 'center' }}>
          <div>Сумка3</div>
          <Image src="https://via.placeholder.com/300" alt="Не вышло :("></Image>

        </Col>
        <Col style={{ 'text-align': 'center' }}>
          <div>Сумка4</div>
          <Image src="https://via.placeholder.com/300" alt="Не вышло :("></Image>

        </Col>
      </Row>

      <Row style={{ 'text-align': 'center', 'height': '200px' }}>
        <Col style={{ 'vertical-align': 'middle' }}>Путівник</Col>
      </Row>

      <Row>
        <Container>
          <Row  style={{ 'text-align': 'left'}}>
            <Col xs="auto">
              <Image src="https://via.placeholder.com/200" style={{ 'padding': '10px 10px 10px 0px'}} alt="Не вышло :("></Image>
            </Col>
            <Col>
              <div>Супер пупуер опис маршрута1</div>
            </Col>
          </Row>

        </Container>
      </Row>
      <Row>
        <Container>
          <Row  style={{ 'text-align': 'left'}}>
            <Col xs="auto">
              <Image src="https://via.placeholder.com/200" alt="Не вышло :(" style={{ 'padding': '10px 10px 10px 0px'}} ></Image>
            </Col>
            <Col>
              <div>Супер пупуер опис маршрута2</div>
            </Col>
          </Row>

        </Container>
      </Row>
      <Row>
        <Container>
          <Row style={{ 'text-align': 'left'}}>
            <Col xs="auto">
              <Image src="https://via.placeholder.com/200" alt="Не вышло :("></Image>
            </Col>
            <Col>
              <div>Супер пупуер опис маршрута3</div>
            </Col>
          </Row>

        </Container>
      </Row>

      <Row style={{ 'text-align': 'center', 'height': '200px' }}>
        <Col style={{ 'vertical-align': 'middle' }}>Блог</Col>
      </Row>

      <Row>
        <Container>
          <Row  style={{ 'text-align': 'left'}}>
            <Col xs="auto">
              <Image  src="https://via.placeholder.com/200" style={{ 'padding': '10px 10px 10px 0px'}} alt="Не вышло :("></Image>
            </Col>
            <Col style={{background: "#333"}}>
              <div>Супер стаття блога1</div>
            </Col>
          </Row>

        </Container>
      </Row>
      <Row>
        <Container>
          <Row style={{ 'text-align': 'left'}}>
            <Col xs="auto">
              <Image src="https://via.placeholder.com/200" alt="Не вышло :(" style={{ 'padding': '10px 10px 10px 0px'}} ></Image>
            </Col>
            <Col>
              <div>Супер стаття блога2</div>
            </Col>
          </Row>

        </Container>
      </Row>
      <Row>
        <Container>
          <Row style={{ 'text-align': 'left'}}>
            <Col xs="auto">
              <Image src="https://via.placeholder.com/200" alt="Не вышло :("></Image>
             
            </Col>
            <Col>
            <div>Супер стаття блога3</div>
            </Col>
          </Row>
        </Container>
      </Row>


      <Row>
        <Col>About Us</Col>
      </Row>
    </Container>

    <style jsx>{`
          .hero h2 {
            color: #333;
          }
    
      .projects {
        color: #333000;
      }
    `}</style>

  </div>
)

export default Home
