import PropTypes from 'prop-types'
import React from 'react'
import {NavLink} from 'reactstrap';

const link = {
  margin: '0 10px',
  display: 'inline-block',
  color: 'rgba(0,0,0,.5)',
  fontSize: 15
}

const Footer = ({ siteTitle, toggle, isOpen }) => (
  <div style={{ padding: '30 0', maxWidth: 1080, margin: '30px auto', color: 'rgba(0,0,0,.5)' }} className="text-center">
    <hr style={{borderColor: 'rgb(223, 223, 223)'}} />
    <span><NavLink target="_blank" href="https://www.linkedin.com/in/shreyans-gandhi-3b01591b/" style={link}>LinkedIn</NavLink>/</span>
    <span><NavLink target="_blank" href="https://github.com/spgandhi" style={link}>Github</NavLink>/</span>
    <span><NavLink target="_blank" href="http://travel.igandhi.com" style={link}>Travel Blog</NavLink>/</span>
    <span><NavLink target="_blank" href="mailto:s@igandhi.com" style={link}>Email</NavLink></span>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: '',
}

export default Footer
