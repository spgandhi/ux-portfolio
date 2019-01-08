import PropTypes from 'prop-types'
import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div style={{ paddingTop: 30 }}>
        <Navbar color="faded" light expand="md" style={{ maxWidth: 1080, margin: 'auto' }}>
          <NavbarBrand href="/"><h2>Shreyans Gandhi</h2></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/#work">Work</NavLink>
              </NavItem>
              <NavItem>
                <NavLink rel="noopener noreferrer" target="_blank" href="https://portfolio.igandhi.com/">Tech Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink rel="noopener noreferrer" target="_blank" href="/Shreyans_Gandhi_Resume.pdf">Resume</NavLink>
              </NavItem>
              {<UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Links
            </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/shreyans-gandhi-3b01591b/">LinkedIn</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/spgandhi">Github</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a rel="noopener noreferrer" target="_blank" href="http://travel.igandhi.com">Travel Blog</a>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: 'Portfolio | Shreyans Gandhi',
}

export default Header
