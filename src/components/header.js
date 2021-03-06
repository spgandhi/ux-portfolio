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
import analytics from '../helper';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    analytics.event('header', 'click', e.target.innerHTML);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div style={{ paddingTop: 60 }}>
        <Navbar color="faded" light expand="md" style={{ maxWidth: 960, margin: 'auto' }}>
          <NavbarBrand href="/"><h4>Shreyans Gandhi</h4></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.handleClick} href="/#work">Work</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.handleClick} rel="noopener noreferrer" target="_blank" href="https://portfolio.igandhi.com/"><span style={{color:'blue'}}>Tech Portfolio</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.handleClick} rel="noopener noreferrer" target="_blank" href="/Shreyans_Gandhi_Resume.pdf">Resume</NavLink>
              </NavItem>
              {<UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret onClick={this.handleClick}>
                  Links
            </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/shreyans-gandhi-3b01591b/" onClick={this.handleClick}>LinkedIn</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/spgandhi" onClick={this.handleClick}>Github</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a rel="noopener noreferrer" target="_blank" href="http://travel.igandhi.com" onClick={this.handleClick}>Travel Blog</a>
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
