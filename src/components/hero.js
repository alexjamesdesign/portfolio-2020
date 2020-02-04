import React from "react"
import PropTypes from "prop-types"
import { motion } from 'framer-motion'
import SvgLogo from "../components/logo"


const heroText = {
  hidden: { y: 90, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const Hero = ({ heading, subHeading }) => (
  <div className="w.full bg-black">
    
    <div className="relative h-auto pt-32 flex flex-wrap tablet:flex-no-wrap items-center tablet:items-start justify-end">
      <div className="block w-full tablet:w-2/5 text-white flex items-center justify-center tablet:justify-end px-10 tablet:px-0 max-w-herologo mx-auto tablet:mx-0"><SvgLogo /></div>
      <div className="block w-full tablet:w-3/5">
        <motion.div transition="easeInOut" variants={heroText} initial="hidden" transition={{ duration: 0.5 }}>
          <h1 className="text-5xl p-5 uppercase tracking-widest bg-white text-black m-0 max-w-xl">{heading}</h1>
        </motion.div>
        <p className="text-left p-5 text-white bg-gray-700 w-full">{subHeading}</p>
      </div>
    </div>

    <div className="bg-yellow-500 h-48 -mt-32"></div>

  </div>
)

Hero.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
}

Hero.defaultProps = {
  heading: ``,
  subHeading: ``,
}

export default Hero
