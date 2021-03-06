import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header'
import './layout.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../global.css';
import Footer from './footer';

const LayoutFull = ({ children }) => (
  <div>
    <Header siteTitle={"Trip Buddy"} />
    <div
      id="main-content"
      style={{
        margin: '0 auto',
        maxWidth: '100%',
        padding: '0px 0 1.45rem',
        paddingTop: 0,
      }}
    >
      {children}
    </div>
    <Footer />
  </div>
)

LayoutFull.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutFull
