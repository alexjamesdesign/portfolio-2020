import React from "react"
import PropTypes from "prop-types"
import { motion } from 'framer-motion'
import Nav from '../components/nav'

import SvgLogo from "../components/logo"

const Header = ({ siteTitle }) => (
  <header className="w.full bg-black">
    
    <Nav />

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
