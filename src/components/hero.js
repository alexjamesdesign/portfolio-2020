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
  <div className="w.full bg-bleu">
    
    <div className="relative flex flex-wrap items-center justify-end h-auto tablet:pt-40 tablet:flex-no-wrap tablet:items-start">
      <div className="flex items-center justify-center block w-full px-12 py-16 pb-8 mx-auto text-white tablet:w-2/5 tablet:justify-end tablet:px-0 tablet:py-0 max-w-herologo tablet:ml-3 tablet:mx-0"><SvgLogo /></div>
      <div className="block w-full overflow-hidden tablet:w-3/5">
        <motion.div>
          <h1 className="max-w-xl p-5 m-0 mx-3 text-3xl tracking-widest uppercase bg-white text-bleu tablet:text-5xl tablet:mx-0">{heading}</h1>
        </motion.div>
        <p className="w-full p-5 ml-3 text-left text-white bg-bleu tablet:ml-0" dangerouslySetInnerHTML={{ __html: subHeading }}></p>   
      </div>
    </div>

    <div className="h-48 -mt-24 bg-yello tablet:h-64 tablet:-mt-32"></div>

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
