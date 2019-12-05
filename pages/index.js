import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Head from 'next/head'
import Nav from 'react-bootstrap/Nav'


import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'

import ListGroup from 'react-bootstrap/ListGroup'

const Home = () => (
  <div>
    <Head>
      <title>Flowers way. Країна очима велосипедистів</title>
      <link rel="icon" href="/icon.ico" />
    </Head>

    <Container>
      <Navbar bg="light" expand="lg" sticky="top">
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
        </Navbar.Collapse>
      </Navbar>

      {/* Projects */}
      <Row>
        <Col className="hero">
          <center> <h2>Наші проекти</h2> </center>
        </Col>
      </Row>

      <Row>
        <Col style={{ 'text-align': 'center' }}>
          <div>Cпорядження</div>
          <Image src="/shop_350*318.png"></Image>
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


      </Row>
      <Row>
        <Col style={{ 'text-align': 'center' }}><h1>Shop</h1></Col>
      </Row>

      <Row>
        <Col>
          - швидко забрудняться...<br />
          - порвуться...<br />
          - у іншого виробника є кращі...<br />
          - чому на переднє колесо?<br /><br />

          Це тільки частина того, що ми чули... 😱<br />

          Чому ж ми вирішили робити власні сумки коли є багато готових? 🤷‍♀️<br />

          Ми купили готові. Нарульна та підседільну. Але жодна з них нам не підійшла. Нарульна просто не причепилася на руль, як ми на старалися, а підседільна:<br />
          1. Не зручно знімати/кріпити.<br />
          2. Постійно розстібалась, за що отримала призьвисько "блюющая" 🙊 (вибачте, але виглядало саме так, коли перед твоїм велосипедом випадає купа речей з попереднього ровера)<br />
          <br />
          Тож, зручні та легкі вело-сумки - це мета, яку ми поставили перед собою.
<br />
          Наразі наші сумки мандрують світом, і довели надійність і зручність. Навіть "Двоколісні Хроники" мандрують пвденною америкою.

        </Col>
      </Row>

      <Row style={{ 'height': "200px" }}>
        <Col style={{ 'text-align': 'center', 'height': '100%' }}>
          <Carousel>
            <Carousel.Item style={{ 'backgroundColor': '#333333', 'height': "200px" }} >
              <Carousel.Caption>
                <h2>Надійні!!</h2>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'backgroundColor': '#333333', 'height': "200px" }}>
              <Carousel.Caption>
                <h3>Зручні</h3>
                <p>Кріпляться на спеціальні кріплення</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
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

      <Row>
        <Col style={{ 'text-align': 'center' }}><h1>Путівник.<br /> Країна очима велосипедистів</h1></Col>
      </Row>
      <Row>
        <Col>
          На цій сторіннці ми зібрали об'єкти лвівської області які варті вашої уваги.
        </Col>
      </Row>
      <Row>
        <Container>
          <Row style={{ 'text-align': 'left' }}>
            <Col xs="auto">
              <Image src="https://via.placeholder.com/200" style={{ 'padding': '10px 10px 10px 0px' }} alt="Не вышло :("></Image>
            </Col>
            <Col>
              <h3>Мальовничий Свірж</h3>
            </Col>
          </Row>

        </Container>
      </Row>
      <Row>
        <Container>
          <Row style={{ 'text-align': 'left' }}>
            <Col xs="auto">
              <Image src="https://via.placeholder.com/200" alt="Не вышло :(" style={{ 'padding': '10px 10px 10px 0px' }} ></Image>
            </Col>
            <Col>
              <h2></h2>
            </Col>
          </Row>

        </Container>
      </Row>
      <Row>
        <Container>
          <Row style={{ 'text-align': 'left' }}>
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
          <Row style={{ 'text-align': 'left' }}>
            <Col xs="auto">
              <Image src="https://via.placeholder.com/200" style={{ 'padding': '10px 10px 10px 0px' }} alt="Не вышло :("></Image>
            </Col>
            <Col>
              <div>Супер стаття блога1</div>
            </Col>
          </Row>

        </Container>
      </Row>
      <Row>
        <Container>
          <Row style={{ 'text-align': 'left' }}>
            <Col xs="auto">
              <Image src="https://via.placeholder.com/200" alt="Не вышло :(" style={{ 'padding': '10px 10px 10px 0px' }} ></Image>
            </Col>
            <Col>
              <div>Супер стаття блога2</div>
            </Col>
          </Row>

        </Container>
      </Row>
      <Row>
        <Container>
          <Row style={{ 'text-align': 'left' }}>
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
