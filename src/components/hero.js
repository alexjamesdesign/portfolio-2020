import React from "react"
import PropTypes from "prop-types"

const Hero = ({ heading }) => (
  <div className="w.full bg-black">
    
    <div className="relative h-64 flex items-center">
      <div className="block w-2/5 text-white flex items-center justify-end"><p>LOGO</p></div>
      <div className="block w-3/5">
        <h1 className="text-5xl p-5 uppercase tracking-widest bg-white text-black m-0 max-w-xl">{heading}</h1>
        <p className="text-left p-5 text-white bg-gray-700 w-full">WEB DESIGNER <br /> // FRONT-END DEVELOPER <span>NOTTINGHAM</span></p>
      </div>
    </div>

    <div className="bg-yellow-500 h-12"></div>

  </div>
)

Hero.propTypes = {
  heading: PropTypes.string,
}

Hero.defaultProps = {
  heading: ``,
}

export default Hero
