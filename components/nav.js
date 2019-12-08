import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { useRouter } from 'next/router'

const Nav1 = () => {
  const router = useRouter()
  return (<Navbar expand="lg" sticky="top">
    <Navbar.Brand href="#home">Flowers way</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav
        activeKey="/"
        onSelect={selectedKey => {
          const href = `/#${selectedKey}`
          router.push(href, href, { shallow: true })
          document.getElementById(`id_${selectedKey}`).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
        }
      >

        <Nav.Item >
          <Nav.Link eventKey="shop">Магазин</Nav.Link>
          {/* <NextLink scroll={true} href="shop">Pathfinder</NextLink> */}
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="blog">Блог</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="pathfinder">Путівник</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Nav1
