import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Head from 'next/head'
import Nav from 'react-bootstrap/Nav'


import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'

const Home = () => (
  <div>
    <Head>
      <title>Flowers way. Країна очима велосипедистів</title>
      <link rel="icon" href="/icon.ico" />
    </Head>

    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Flowers way</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

        
          <Nav
            activeKey="/"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item>
              <Nav.Link href="#pathfinder">Pathfinder</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#blog">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#shop">Shop</Nav.Link>
            </Nav.Item>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
      <Row><Col><Image src="/IMG_0078.jpg" fluid alt="Не вышло :(">

        </Image>
<h1>Flowers way<br /> Країна очима велосипедистів</h1></Col></Row>
      {/* Projects */}
      <Row>
        <Col>Our Projects</Col>
      </Row>
      <Row>
        <Col style={{'text-align': 'center'}}>
          
          <Image src="/pathfinger_350*329.png" alt="Не вышло :("></Image>
          <div>Путівник</div>
        </Col>
        

        <Col style={{'text-align': 'center'}}>
          <div>Блог Flower`s way</div>
          <Image src="/blog_350*337.png"></Image>
        </Col>
       
        <Col style={{'text-align': 'center'}}>
          <div>Велоспорядження для легких подорожей</div>
          <Image src="/shop_350*318.png"></Image>
        </Col>
      </Row>
      <Row>
        <Col>About Us</Col>
      </Row>
    </Container>

  </div>
)

export default Home
