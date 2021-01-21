import React, { useContext } from 'react'
import ThemeContext from '../utils/theme'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import './Fontawesome.js'
export default () => {
  const { dark, toggleDark, toString } = useContext(ThemeContext)
  return (
    <Navbar variant={toString()} fixed="top" collapseOnSelect expand="md">
      <Navbar.Brand className="pl-5 ml-5" as={Link} to="/" title="Home">
        Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="pr-3 mr4 nav-links">
          <Nav.Link className="ml-2" as={Link} to="/about" title="About">
            ABOUT
          </Nav.Link>
          <Nav.Link className="ml-2" as={Link} to="/blog" title="Blog">
            BLOG
          </Nav.Link>
          <Nav.Link className="ml-2" as={Link} to="/projects" title="Projects">
            PROJECTS
          </Nav.Link>
          <Nav.Link className="ml-2" as={Link} to="/resume" title="Resume">
            RESUME
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
